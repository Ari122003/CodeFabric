import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Orders() {
	const token = useSelector((state) => state.User.token);
	const [orders, setorders] = useState([]);
	let serial = 0;

	useEffect(() => {
		getOrders();
	}, []);

	const getOrders = async () => {
		await fetch("http://localhost:3000/api/GetOrders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ token: token }),
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setorders(res.Orders);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div class="flex md:mx-20 md:my-20 my-5 mx-2 flex-col ">
			<div className="flex flex-col text-center w-full mb-5">
				<h1
					className="sm:text-6xl text-3xl font-medium title-font text-gray-900"
					hidden={token !== null && orders.length != 0 ? false : true}>
					Your orders
				</h1>
				<h1
					className="sm:text-6xl text-3xl font-medium title-font text-gray-900"
					hidden={token == null && orders.length == 0 ? false : true}>
					Please sign in to order!!!
				</h1>
				<h1
					className="sm:text-6xl text-3xl font-medium title-font text-gray-900"
					hidden={token != null && orders.length == 0 ? false : true}>
					You have not ordered yet!!!
				</h1>
			</div>
			<div
				class={`overflow-x-auto sm:-mx-6 lg:-mx-8  ${
					token == null || orders.length == 0 ? "hidden" : ""
				}`}>
				<div class="inline-block md:min-w-full  py-2 sm:px-6 lg:px-8 text-black">
					<div class="overflow-hidden">
						<table class="min-w-full text-left text-sm font-light">
							<thead class="border-b font-medium dark:border-neutral-500">
								<tr>
									<th scope="col" class="px-2 py-4">
										Number
									</th>
									<th scope="col" class="px-2 py-4">
										Name
									</th>
									<th scope="col" class="px-2 py-4">
										Quantity
									</th>
									<th scope="col" class="px-2 py-4">
										Price
									</th>
								</tr>
							</thead>
							<tbody>
								{orders.length !== 0 &&
									orders.map((i) => {
										const { item } = i;

										return (
											<tr
												class="border-b dark:border-neutral-500 text-black"
												key={item._id}>
												<td class="whitespace-nowrap px-2 py-4 font-medium">
													{++serial}
												</td>
												<td class="whitespace-wrap px-2 py-4 ">{item.Title}</td>
												<td class="whitespace-nowrap px-2 py-4">
													{i.quantity}
												</td>
												<td class="whitespace-nowrap px-2 py-4">
													{item.Price}
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
