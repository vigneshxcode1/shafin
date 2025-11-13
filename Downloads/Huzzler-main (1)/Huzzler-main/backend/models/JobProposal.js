import mongoose from "mongoose";


const JobProfileSchema = new mongoose.Schema({

    JobTitle: {
        type: String,
        required: true,
    },
    Des: {
        type: String,
        required: true,
    },
    Category: {
        type: String,
        required: true,
    },
    SpecificDeliverables: {
        type: Number
    },
    empoymentType: {
        type: String,
        required: true,
    },
    ProjectDuration: {
        type: Number,
        required: true,
    },
    Time: {
        type: Number
    },
    DeliveryDay: {
        type: Number,
        required: true,
    },
    SampleProject: {
        type: [String]
    },
    Skills: {
        type: [String],
        required: true
    },
    toot:{
    type:[String]
    },
    minprice: {
        type: Number,
        required: true,
    },
    maxprice: {
        type: Number,
        required: true
    },

    FreelancerRequirement: {
        type: String,
    }
})

const JobProfileModel = mongoose.model("JobProfile", JobProfileSchema);

export default JobProfileModel;