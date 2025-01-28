import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
        title : {
            type : String,
            required : true,
            trim : true
        },
        description : {
            type : String,
            required : true,
            default : "No Description provided",
            trim : true
        },
        craetedBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true,
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