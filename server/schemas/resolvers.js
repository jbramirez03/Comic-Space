const { AuthenticationError } = require("apollo-server-express");
const { User, Comic, Category, Order } = require("../models");
const { update } = require("../models/Post");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    // categories: async () => {
    //   return await Category.find();
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("comics");

        return userData;
      }
      // if user not logged in throw error indicating a user is not logged in.
      throw new AuthenticationError("Not logged in");
    },
    comics: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Comic.find(params).populate("category");
    },
    comic: async (parent, { _id }) => {
      return await Comic.findById(_id).populate("category");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        // .populate({
        //   path: "orders.comics",
        //   populate: "category",
        // });

        // user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        // .populate({
        //   path: "orders.comics",
        //   populate: "category",
        // });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ comics: args.comics });
      const line_items = [];

      const { comics } = await order.populate("comics").execPopulate();

      for (let i = 0; i < comics.length; i++) {
        const comic = await stripe.comics.create({
          name: comics[i].name,
          description: comics[i].description,
          images: [`${url}/images/${comics[i].image}`],
        });

        const price = await stripe.prices.create({
          comic: comic.id,
          unit_amount: comics[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { comics }, context) => {
      if (context.user) {
        const order = new Order({ comics });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    saveComic: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { comics: args.input } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    removeComic: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },

          { $pull: { comics: { comicId: args.comicId } } },

          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError("Please login in!");
    },
    wishComic: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { wishlist: args.input } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    postComic: async (parent, args, context) => {
      if (context.user) {
        // const post = await Post.create(args.input);
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: args.input } },
          { new: true, runValidators: true }
        );
        return updatedUser;

      }

      throw new AuthenticationError("You need to be logged in!");
    }
  },
};

module.exports = resolvers;
