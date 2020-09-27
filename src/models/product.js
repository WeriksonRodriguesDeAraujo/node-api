const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

productSchema.plugin(mongoosePaginate);

mongoose.model('product', productSchema);