import mongoose from "mongoose";

const OrdserSchema = new mongoose.Schema(
	{
		UserId: {
			type: String,
			required: true,
		},
		Products: [
			{
				Product: { type: Object, required: true },
				Quantity: { type: Number, default: 1 },
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
