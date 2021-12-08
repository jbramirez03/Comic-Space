import { AuthenticationError } from 'apollo-server-express';
import db from '../models/index.js';

const queries = {
    Query: {
        // categories: async () => {
        //   return await Category.find();
        // },
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await db.User.findOne({ _id: context.user._id })
                    .select("-__v -password")
                    .populate("comics");

                return userData;
            }
            // if user not logged in throw error indicating a user is not logged in.
            throw new AuthenticationError("Not logged in");
        },
        comics: async (parent, { category, name }) => {
            const params = {};

            // if (category) {
            //     params.category = category;
            // }

            // if (name) {
            //     params.name = {
            //         $regex: name,
            //     };
            // }

            return await db.Comic.find(params);
        },
        comic: async (parent, { _id }) => {
            return await db.Comic.findById(_id);
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await db.User.findById(context.user._id)
                // .populate({
                //   path: "orders.comics",
                //   populate: "category",
                // });

                // user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError("Not logged in");
        },
        // order: async (parent, { _id }, context) => {
        //     if (context.user) {
        //         const user = await User.findById(context.user._id)
        //         // .populate({
        //         //   path: "orders.comics",
        //         //   populate: "category",
        //         // });

        //         return user.orders.id(_id);
        //     }

        //     throw new AuthenticationError("Not logged in");
        // },
        // checkout: async (parent, args, context) => {
        //     const url = new URL(context.headers.referer).origin;
        //     const order = new Order({ comics: args.comics });
        //     const line_items = [];

        //     const { comics } = await order.populate("comics").execPopulate();

        //     for (let i = 0; i < comics.length; i++) {
        //         const comic = await stripe.comics.create({
        //             name: comics[i].name,
        //             description: comics[i].description,
        //             images: [`${url}/images/${comics[i].image}`],
        //         });

        //         const price = await stripe.prices.create({
        //             comic: comic.id,
        //             unit_amount: comics[i].price * 100,
        //             currency: "usd",
        //         });

        //         line_items.push({
        //             price: price.id,
        //             quantity: 1,
        //         });
        //     }

        //     const session = await stripe.checkout.sessions.create({
        //         payment_method_types: ["card"],
        //         line_items,
        //         mode: "payment",
        //         success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        //         cancel_url: `${url}/`,
        //     });

        //     return { session: session.id };
        // },
        posts: async (parents, args, context) => {
            const posts = await db.Post.find({});

            return posts;
        },
        messages: async (parent, args, context) => {
            const messages = await db.Message.find({});

            return messages;
        }

    }
}

export default queries;