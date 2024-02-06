import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { remove, update } from "@/States/Reducers/CartReducer";
import Link from "next/link";

export default function Cart() {
	const products = useSelector((state) => state.Cart.cart);
	const [total, settotal] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		let sum = 0;
		if (products.length === 0) {
			settotal(0);
		} else {
			for (let i of products) {
				let { item } = i;
				sum = (sum + item.Price)*i.quantity;
				settotal(sum);
			}
		}
	}, [total, products]);

	const updateQty = (q, s) => {
		const newqty = {
			qty: q,
			slug: s,
		};

		dispatch(update(newqty));
	};

	const removeItem = (slug) => {
		dispatch(remove(slug));
	};

	return (
		<section className="text-black body-font overflow-hidden mx-20 my-20">
			<div className="flex flex-col text-center w-full mb-5">
				<h1 className="sm:text-6xl text-3xl font-medium title-font text-gray-900">
					Your Cart
				</h1>
				<h1
					className="sm:text-3xl  text-xl font-medium title-font mt-10 text-gray-900"
					hidden={products.length === 0 ? false : true}>
					Add products to cart
				</h1>
			</div>

			<div className="container px-5 py-24 mx-auto">
				<div className="-my-8 divide-y-2 divide-gray-100">
					{products.length !== 0 &&
						products.map((i) => {
							const { item } = i;

							return (
								<div
									className="py-8 flex flex-wrap md:flex-nowrap md:shadow-2xl shadow-xl"
									key={item._id}>
									<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
										<img className=" h-48 w-60 block" src={item.Image} />
									</div>
									<div className="md:flex-grow">
										<h2 className="text-2xl font-medium text-gray-900 title-font mb-2 w-16 mx-auto md:w-full">
											{item.Category}
										</h2>
										<p className="leading-relaxed">{item.Title}</p>
										<div className="flex flex-wrap items-center md:mt-16 mt-5">
											<MdDelete
												className="h-6 w-6 mx-5"
												onClick={() => {
													removeItem(item.Slug);
												}}
											/>
											<div className="relative">
												<select
													onChange={(e) => {
														updateQty(e.target.value, item.Slug);
													}}
													defaultValue={i.quantity}
													className="rounded border mx-5 appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
													<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
													<option>6</option>
													<option>7</option>
													<option>8</option>
													<option>9</option>
													<option>10</option>
												</select>
												<span className="absolute right-0 top-0 h-full w-20 text-center text-gray-600 pointer-events-none flex items-center justify-center">
													<svg
														fill="none"
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														className="w-4 h-4"
														viewBox="0 0 24 24">
														<path d="M6 9l6 6 6-6"></path>
													</svg>
												</span>
											</div>
										</div>
									</div>
									<div className="inline mt-5 md:my-auto md:mr-16 text-xl mx-auto">
										{i.quantity}
									</div>
								</div>
							);
						})}
				</div>
			</div>
			<div className="flex justify-between flex-wrap flex-col md:flex-row ">
				<h1 className="sm:text-3xl text-xl font-medium title-font  text-gray-900">
					{total !== 0 && `Subtotal : ${total}`}
				</h1>
				{total !== 0 && (
					<Link href="/Order/fromcart">
						<button className="buto py-1 px-3 mt-10 focus:outline-none rounded">
							Proceed to buy
						</button>
					</Link>
				)}
			</div>
		</section>
	);
}
