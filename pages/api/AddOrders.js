import Order from "@/Models/OrderSchema";
import connect from "@/Middleware";

const handler = async (req, res) => {
	try {
		const { userId, products, address, state, city, amount, zip } = req.body;

		const newOrder = new Order({
			UserId: userId,
			Products: products,
			Address: address,
			State: state,
			City: city,
			Zip: zip,
			Amount: amount,
			Status: "Taken",
		});
		await newOrder.save();
		res.status(200).json(req.body);
	} catch (error) {
		res.status(500).send(error);
	}
};

export default connect(handler);
