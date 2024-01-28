const Pincodes = [700001, 700002, 700004, 700005, 700003];

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const pin = parseInt(req.body.Pin);

			if (Pincodes.includes(pin)) {
				res.send(true);
			} else {
				res.send(false);
			}
		} catch (error) {
			res.status(500).json({ Message: "Internal server error" });
		}
	} else {
		res.status(500);
	}
}
