const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    CourseName:{
        type:String

    },
    courseDescription:{
        type:String,

    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    whatYouWillLearn:{
        type:String,
    },
    courseContent:[{
        type:mongoose,
        ref:"Section",
    }],
    ratingAndReviews:[
        {
           type:mongoose.Schema.Types.ObjectId ,
           ref:"RatingAndReviews"
        }


    ],
    price:{
        type:Numbers
    },

    thumbnainal:{
        type:String,
    },

    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag"
    },

    studentsEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    }]

});

module.exports = mongoose.model("Course",courseSchema);
