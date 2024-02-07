import { useRouter } from "next/router";
import React, { useState } from "react";
import mongoose from "mongoose";
import Product from "@/Models/ProductSchema";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "@/States/Reducers/CartReducer";

export default function Slug({ product, variants, directBuy }) {
	const router = useRouter();
	const [pin, setpin] = useState();
	const [valid, setvalid] = useState();
	const [col, setcol] = useState(product.Colour);
	const [size, setsize] = useState(product.Size);
	const [qty, setqty] = useState(1);
	const colours = [`red`, `green`, `blue`, `yellow`, `white`, `black`, `grey`];
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.Cart.cart);

	const sendtoCart = async () => {
		if (cart.length === 0) {
			const prod = { item: product, quantity: qty };
			dispatch(addtoCart(prod));
		} else {
			let match = false;
			await cart.forEach((i) => {
				if (i.item.Slug === product.Slug) {
					match = true;
				}
			});
			if (match == false) {
				const prod = { item: product, quantity: qty };

				dispatch(addtoCart(prod));
			} else {
				alert("Added");
			}
		}
	};

	const buyNow = () => {
		const tosend = {
			item: product,
			quantity: qty,
		};
		directBuy(tosend);
		router.push(`/Order/buynow`);
	};

	const handelPincode = async () => {
		await fetch("http://localhost:3000/api/Pincode", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ Pin: pin }),
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setvalid(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const refresh = (size, col) => {
		window.location = `http://localhost:3000/Products/${variants[col][size]["slug"]}`;
	};

	return (
		<section className="text-gray-600  body-font overflow-hidden mb-10">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<img
						alt="ecommerce"
						className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
						src={product.Image}
					/>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h2 className="text-md title-font text-gray-500 tracking-widest">
							Bongwear
						</h2>
						<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
							{product.Title}--{product.Size}/{product.Colour}
						</h1>
						<div className="flex mb-4">
							<span className="flex items-center">
								<svg
									fill="currentColor"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 text-purple-500"
									viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 text-purple-500"
									viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 text-purple-500"
									viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 text-purple-500"
									viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 text-purple-500"
									viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<span className="text-gray-600 ml-3">4 Reviews</span>
							</span>
						</div>
						<p className="leading-relaxed">{product.Description}</p>
						<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
							<div className="flex">
								<span className="mr-3">Color</span>

								{colours.map((item) => {
									if (
										Object.keys(variants).includes(item) &&
										Object.keys(variants[item]).includes(size)
									) {
										return (
											<button
												key={item}
												onClick={() => {
													refresh(size, item);
												}}
												style={{ backgroundColor: item }}
												className={`border-2  rounded-full w-6 h-6  focus:outline-none ${
													col === item ? "border-black" : "border-gray-300"
												}`}></button>
										);
									}
								})}
							</div>
							<div className="flex ml-6 items-center">
								<span className="mr-3">Size</span>
								<div className="relative">
									<select
										value={size}
										onChange={(e) => {
											refresh(e.target.value, col);
										}}
										className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
										{Object.keys(variants[col]).includes("S") && (
											<option>S</option>
										)}
										{Object.keys(variants[col]).includes("M") && (
											<option>M</option>
										)}
										{Object.keys(variants[col]).includes("L") && (
											<option>L</option>
										)}
										{Object.keys(variants[col]).includes("XL") && (
											<option>XL</option>
										)}
										{Object.keys(variants[col]).includes("XXL") && (
											<option>XXL</option>
										)}
									</select>
									<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-4 h-4"
											viewBox="0 0 24 24">
											<path d="M6 9l6 6 6-6"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>
						<div className="flex">
							<span className="title-font font-medium text-2xl text-gray-900">
								M.R.P:- ₹{product.Price}
							</span>
							<button
								onClick={buyNow}
								className="flex ml-auto buto border-0 py-2 px-6 focus:outline-none  rounded">
								Buy now
							</button>
							<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5"
									viewBox="0 0 24 24">
									<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
								</svg>
							</button>
						</div>
						<div className="flex mx-auto mt-5 items-center">
							<span className="mr-3">Quantity</span>
							<div className="relative">
								<select
									onChange={(e) => {
										setqty(parseInt(e.target.value));
									}}
									className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
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
								<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4"
										viewBox="0 0 24 24">
										<path d="M6 9l6 6 6-6"></path>
									</svg>
								</span>
							</div>
						</div>
						<div className="container flex mt-5 space-x-5">
							<input
								onChange={(e) => {
									setpin(e.target.value);
								}}
								type="text  "
								className="border-gray-400 border-2"
								placeholder="Pin code"
							/>

							<button
								onClick={handelPincode}
								className="buto py-1 px-3 focus:outline-none rounded">
								Verify
							</button>
						</div>
						{valid && valid != undefined && (
							<div className="mt-4 text-green-600">
								We service on this pincode
							</div>
						)}
						{!valid && valid != undefined && (
							<div className="mt-4 text-red-600">
								Sorry!! We don't service on this pincode
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<button
					onClick={sendtoCart}
					className=" mx-auto buto border-0 py-2 px-6 focus:outline-none  rounded">
					Add to cart
				</button>
			</div>
		</section>
	);
}

export async function getServerSideProps(context) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.URI);
	}

	const product = await Product.findOne({ Slug: context.query.slug }).exec();
	const variant = await Product.find({ Title: product.Title });
	const cosis = {}; //{red:{xl:{slug}}}

	for (let item of variant) {
		if (Object.keys(cosis).includes(item.Colour)) {
			cosis[item.Colour][item.Size] = { slug: item.Slug };
		} else {
			cosis[item.Colour] = {};
			cosis[item.Colour][item.Size] = { slug: item.Slug };
		}
	}

	return {
		props: {
			product: JSON.parse(JSON.stringify(product)),
			variants: JSON.parse(JSON.stringify(cosis)),
		},
	};
}
