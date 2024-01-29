import mongoose from "mongoose";

const OrdserSchema = new mongoose.Schema(
	{
		UserId: {
			type: String,
			required: true,
		},
		Products: [
			{
				ProductId: { type: String },
				Quantity: { type: Number, default: 1 },
			},
		],

		Address: {
			type: String,
			required: true,
		},
		Amount: {
			type: Number,
			required: true,
		},
		Status: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);
mongoose.models = {};

export default mongoose.model("Order", OrdserSchema);
