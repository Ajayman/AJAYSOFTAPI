const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    feature: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        default: 3
    },
    created: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `{VALUE} is not supported`
        }
    }
});
// Product is collection and productSchme is data structure for table(model)
module.exports = mongoose.model("Product", productSchema);