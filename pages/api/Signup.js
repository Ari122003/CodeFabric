import User from "@/Models/UsersSchema";
import connect from "@/Middleware";

const handler = async (req, res) => {
	try {
		const { name, email, image } = req.body;

		let verify = await User.findOne({ Email: email }).exec();

		if (verify == null) {
			const newuser = new User({ Name: name, Email: email, Image: image });

			await newuser.save();

			res.status(200).json({ msg: "Registered successfully" });
		} else {
			res.status(200).json({ msg: "Welcome again" });
		}
	} catch (error) {
		res.status(500).json({ msg: "Internal server error" });
	}
};

export default connect(handler);
