import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		Name: {
			type: String,
			required: true,
		},

		Eamil: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);
mongoose.models = {};
export default mongoose.model("User", UserSchema);
