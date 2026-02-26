import pubsub from "../utils/pubsub.js";

const subscriptions = {
  Subscription: {
    newMessage: {
      // More on pubsub below
      subscribe: () => pubsub.asyncIterator(["POST_MESSAGE"]),
    },
  },
};

export default subscriptions;
