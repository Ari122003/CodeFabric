import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		Name: {
			type: String,
			required: true,
		},

		Email: {
			type: String,
			required: true,
		
		},
		Image: {
			type: String,
		},
	},
	{ timestamps: true }
);
mongoose.models = {};
export default mongoose.model("User", UserSchema);
