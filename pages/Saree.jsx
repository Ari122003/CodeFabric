import Link from "next/link";
import React, { useEffect } from "react";
import mongoose from "mongoose";
import Product from "@/Models/ProductSchema";

export default function Tshirts(props) {
	const products = props.Products;

	useEffect(() => {});

	return (
		<section className="text-black body-font mx-10 ">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4 gap-36">
					{Object.keys(products).map((item) => {
						return (
							<Link
								key={products[item]._id}
								href={`/Products/${products[item].Slug}`}
								className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-xl product">
								<div>
									<div className="block relative rounded overflow-hidden">
										<img
											alt="ecommerce"
											className="h-[50vh] block mx-auto"
											src={products[item].Image}
										/>
									</div>
									<div className="mt-4">
										<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
											{products[item].Category}
										</h3>
										<h2 className="text-gray-900 title-font text-lg font-medium">
											{products[item].Title}
										</h2>
										<p className="mt-1">₹{products[item].Price}</p>

										
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export async function getServerSideProps() {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.URI);
	}

	const products = await Product.find({ Category: "Saree" }).exec();

	const saree = {};

	for (let item of products) {
		if (item.Title in saree) {
			if (!saree[item.Title].Colour.includes(item.Colour) && item.Stock > 0) {
				saree[item.Title].Colour.push(item.Colour);
			}
			if (!saree[item.Title].Size.includes(item.Size) && item.Stock > 0) {
				saree[item.Title].Size.push(item.Size);
			}
		} else {
			saree[item.Title] = JSON.parse(JSON.stringify(item));

			if (item.Stock > 0) {
				saree[item.Title].Colour = [item.Colour];
				saree[item.Title].Size = [item.Size];
			}
		}
	}

	return { props: { Products: JSON.parse(JSON.stringify(saree)) } };
}
