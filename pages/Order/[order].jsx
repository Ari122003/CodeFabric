import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Order({ itemTobuynow }) {
	const [data, setdata] = useState({
		name: "",
		email: "",
		address: "",
		city: "",
		state: "",
	});

	const [zip, setzip] = useState();
	const [amt, setamt] = useState();

	const router = useRouter();

	const products = useSelector((state) => state.Cart.cart);

	const token = useSelector((state) => state.User.token);

	const [prod, setprod] = useState([]);

	useEffect(() => {
		if (router.query.order !== "fromcart" && router.query.order !== "buynow") {
			router.push("/Tshirts");
		}
		if (router.query.order === "fromcart") {
			setprod(products);

			let sum = 0;

			for (let i of products) {
				const { item } = i;

				sum = (sum + item.Price) * i.quantity;
			}

			setamt(sum);
		} else if (router.query.order === "buynow") {
			setamt(itemTobuynow.item.Price * itemTobuynow.quantity);
			const arr = [];
			arr.push(itemTobuynow);
			setprod(arr);
		}
	}, []);

	const dataChange = (e) => {
		setdata({ ...data, [e.target.name]: e.target.value });
	};
	const zipChange = (e) => {
		setzip(parseInt(e.target.value));
	};

	const sumbit = async (e) => {
		e.preventDefault();
		await fetch("http://localhost:3000/api/AddOrders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userId: token,
				products: prod,
				address: data.address,
				city: data.city,
				state: data.state,
				amount: amt,
				zip: zip,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res);
			})

			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<form className="order md:mx-20 rounded-2xl md:my-20" onSubmit={sumbit}>
			<div class="space-y-12   ">
				<div class="border-b border-gray-900/10 pb-12 mx-10 ">
					<div className="flex justify-center py-10">
						<h2 class="md:text-6xl text-3xl font-semibold leading-7 text-gray-900 ">
							Order details
						</h2>
					</div>

					<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div class="sm:col-span-3">
							<label
								for="first-name"
								class="block text-sm font-medium leading-6 text-gray-900">
								Name
							</label>
							<div class="mt-2">
								<input
									type="text"
									name="name"
									onChange={dataChange}
									id="first-name"
									autocomplete="given-name"
									class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div class="sm:col-span-4">
							<label
								for="email"
								class="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div class="mt-2">
								<input
									id="email"
									name="email"
									onChange={dataChange}
									type="email"
									autocomplete="email"
									class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div class="col-span-full">
							<label
								for="street-address"
								class="block text-sm font-medium leading-6 text-gray-900">
								Street address
							</label>
							<div class="mt-2">
								<input
									type="text"
									name="address"
									onChange={dataChange}
									id="street-address"
									autocomplete="street-address"
									class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2 sm:col-start-1">
							<label
								for="city"
								class="block text-sm font-medium leading-6 text-gray-900">
								City
							</label>
							<div class="mt-2">
								<input
									type="text"
									name="city"
									onChange={dataChange}
									id="city"
									autocomplete="address-level2"
									class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label
								for="region"
								class="block text-sm font-medium leading-6 text-gray-900">
								State
							</label>
							<div class="mt-2">
								<input
									type="text"
									name="state"
									onChange={dataChange}
									id="region"
									autocomplete="address-level1"
									class="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label
								for="postal-code"
								class="block text-sm font-medium leading-6 text-gray-900">
								ZIP code
							</label>
							<div class="mt-2">
								<input
									type="text"
									name="postal-code"
									id="postal-code"
									onChange={zipChange}
									autocomplete="postal-code"
									class="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div>

				<div class="border-b flex justify-center flex-col items-center border-gray-900/10 pb-12">
					<h2 class="text-base font-semibold leading-7 text-gray-900">Total</h2>
					<p class="mt-1 text-sm leading-6  text-gray-600">Rs 1200</p>
				</div>
			</div>

			<div class="mt-6 flex items-center justify-center  gap-x-6">
				<button
					type="submit"
					class="rounded-md px-3 py-2 mb-5 text-sm font-semibold buto shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
					Place order
				</button>
			</div>
		</form>
	);
}
