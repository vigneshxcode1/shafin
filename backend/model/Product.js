

import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'enter the name'],
        trim: true,
       
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    describe: {
        type: String,
        required: [true, 'please enter the description'],
        maxlength: [10000, 'description details cannot exceed 10000 characters']
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [{
        type: String, 
        required: true
      }],
    size: {
        type: String,
        enum: {
            values: ["s", "m", "xl", "xxl", "xxxl"],
          
        }
    },
    category: {
        type: String,
        required: [true, 'please enter product category'],
        enum: {
            values: [
                'animi-oversizes-t-shirts',
                'printed-oversized',
                'trending',
                'trendoversized',
                'car',
                'caroversized',
                'bike',
                'bikeoversized',
                'posters',
                'animiposter',
                'movieposter',
                'bikeposter',
                'carposter',
                'hoodie',
                'pants',
                'slippers',
                'T-shirt',
                'animi-tshirt',
                'printed-collection'
            ],
            message: 'please select correct category'
        }
    },
    seller: {
        type: String,
        required: [true, 'please enter product seller name']
    },
    stock: {
        type: Number,
        required: [true, 'please enter product stock'],
       
    },
    numofreview: {
        type: Number,
        default: 0
    },
    review: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
