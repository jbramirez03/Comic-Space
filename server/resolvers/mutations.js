import { AuthenticationError } from 'apollo-server-express';
import { User, Comic, Post } from '../models/index.js';

const mutations = {
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
    },
    //   addOrder: async (parent, { comics }, context) => {
    //     if (context.user) {
    //       const order = new Order({ comics });

    //       await User.findByIdAndUpdate(context.user._id, {
    //         $push: { orders: order },
    //       });

    //       return order;
    //     }

    //     throw new AuthenticationError("Not logged in");
    //   },
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
            await Post.create(args.input);
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { posts: args.input } },
                { new: true, runValidators: true }
            );
            return updatedUser;
            // return post;
        }

        throw new AuthenticationError("You need to be logged in!");
    },
    removeWish: async (parent, args, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },

                { $pull: { wishlist: { comicId: args.comicId } } },

                { new: true }
            );

            return updatedUser;
        }
        throw new AuthenticationError("Please login in!");
    },
}

export default mutations;