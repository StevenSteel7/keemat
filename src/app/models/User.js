import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema(
    {
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        },
        {timestamps:true}
);

export default mongoose.model.User || mongoose.model("User", userSchema); // if not created, create a new user