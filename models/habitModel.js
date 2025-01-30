import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
        title : {
            type : String,
            required : true,
            default : "Untitled",
            trim : true
        },
        description : {
            type : String,
            required : true,
            default : "No Description provided",
            trim : true
        },
        createdBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : false,
        },
        streaks : [{
            userid : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "User"
            },
            dates : [{type  : Date}],
        }],

        startDate : {
            type : Date,
            default : Date.now,
        },
        endDate : {type : Date},
        status: {
            type: String,
            enum: ['Active', 'Completed', 'Cancelled'],
            default: 'Active',
        },
        winner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
        },
    })
const Habit = mongoose.model("Habit" , habitSchema);
export default Habit;