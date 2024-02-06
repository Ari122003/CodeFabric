import mongoose from "mongoose";

const OrdserSchema = new mongoose.Schema(
	{
		UserId: {
			type: String,
			required: true,
		},
		Products: [
			{
				item: { type: Object, required: true },
				quantity: { type: Number, default: 1 },
			},
		],

		Address: {
			type: String,
			required: true,
		},
		State: {
			type: String,
			required: true,
		},
		City: {
			type: String,
			required: true,
		},
		Zip: {
			type: Number,
			required: true,
		},

		Amount: {
			type: Number,
			required: true,
		},
		Status: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
mongoose.models = {};

export default mongoose.model("Order", OrdserSchema);
