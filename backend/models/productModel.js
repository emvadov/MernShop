import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name:  { type: String, Required: true },
    rating:  { type: Number, Required: true },
    comment:  { type: String, Required: true }
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],

    rating: {
        type: Number,
        required: true,
        default: 0
    },
    NumReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    CountInStock: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product