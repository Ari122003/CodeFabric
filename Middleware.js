import mongoose from "mongoose";

const connect = (handler) => async (req, res) => {
	if (mongoose.connections[0].readyState) {
		return handler(req, res);
	} else {
		await mongoose.connect(process.env.URI).then(() => {
			console.log("Connected Successfully");
		});

		return handler(req, res);
	}
};

export default connect;
