const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  comics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comic",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
