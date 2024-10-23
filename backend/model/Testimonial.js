import mongoose from "mongoose";


const testimonialschema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'please enter your name']
    },

    review:{
        type:String,
        required:[true,'please enter review']
    }
})

const testimonialModel = mongoose.model('testimonial',testimonialschema);

export default testimonialModel