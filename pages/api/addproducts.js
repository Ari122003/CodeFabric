import Product from "@/Models/ProductSchema";
import connect from "@/Middleware";

const handler = async (req, res) => {
	if (req.method === "POST") {
		try {
			for (let i = 0; i < req.body.length; i++) {
				const {
					title,
					slug,
					description,
					image,
					category,
					price,
					size,
					colour,
					stock,
				} = req.body[i];

				const newProduct = new Product({
					Title: title,
					Slug: slug,
					Description: description,
					Image: image,
					Category: category,
					Size: size,
					Price: price,
					Colour: colour,
					Stock: stock,
				});

				await newProduct.save();
			}

			res.status(200).send("Order placed Successfully");
		} catch (error) {
			
			res.status(500).send("Internal server error");
		}
	} else {
		res.status(400).send("Invalid method");
	}
};

export default connect(handler);
