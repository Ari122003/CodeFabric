import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
	{
		Title: {
			type: String,
			required: true,
		},

		Slug: {
			type: String,
			required: true,
			unique: true,
		},
		Description: {
			type: String,
			required: true,
		},

		Image: {
			type: String,
			required: true,
		},

		Category: {
			type: String,
			required: true,
		},
		Size: {
			type: String,
		},
		Colour: {
			type: String,
		},
		Price: {
			type: Number,
			required: true,
		},
		Stock: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Product", ProductSchema);
