const mongoose = require("mongoose");
const SubSection = require("./SubSection");

const sectionSchema=mongoose.Schema({
    sectionName:{
        type:String,
    },
    SubSection:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"SubSection",
    },
})

modules.export=mongoose.models("Section",sectionSchema);