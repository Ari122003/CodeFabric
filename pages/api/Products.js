import Product from "@/Models/ProductSchema";
import connect from "@/Middleware";

const handler = async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).send("Internal server error");
	}
};

export default connect(handler);
