import User from "@/Models/UsersSchema";
import connect from "@/Middleware";

const handler = async (req, res) => {
	try {
		const { name, email } = req.body;

		let veriefy = await User.findOne({ Email: email }).exec();

		if (veriefy == null) {
			const newuser = new User({ Name: name, Email: email });
			await newuser.save();
			 
		

			res.status(200).send("Registered");
		} else {
			res.status(200).send("Welcome again");
		}
	} catch (error) {
		res.status(500).send("Internal server error");
	}
};

export default connect(handler);
