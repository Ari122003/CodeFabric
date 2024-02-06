import Order from "@/Models/OrderSchema";
import connect from "@/Middleware";

const handler = async (req, res) => {
	try {
		const { token } = req.body;

		const arr = [];

		const orders = await Order.find({ UserId: token }).exec();

		const getter = (prod) => {
			prod.forEach((i) => {
				arr.push(i);
			});
		};

		orders.forEach((i) => {
			getter(i.Products);
		});

		res.status(200).json({ Orders: arr });
	} catch (error) {
		res.status(500).send(error);
	}
};

export default connect(handler);
