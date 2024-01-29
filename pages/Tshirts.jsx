import Link from "next/link";
import React from "react";
import mongoose from "mongoose";
import Product from "@/Models/ProductSchema";

export default function Tshirts(props) {
	const products = props.Products;
	return (
		<section className="text-black body-font mx-10 ">
			<div className="container px-5 py-24 mx-auto ">
				<div className="flex flex-wrap -m-4 gap-3 ">
					{products.map((item) => {
						return (
							<Link
								key={item._id}
								href="/Products/Tshirts"
								className="lg:w-1/4 md:w-1/2 p-4 w-full product rounded-xl">
								<div>
									<a className="block relative rounded overflow-hidden">
										<img
											alt="ecommerce"
											className="h-[50vh] block"
											src={item.Image}
										/>
									</a>
									<div className="mt-4">
										<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
											{item.Category}
										</h3>
										<h2 className="text-gray-900 title-font text-lg font-medium">
											{item.Title}
										</h2>
										<p className="mt-1">{item.Price}</p>
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

	const products = await Product.find({ Category: "Tshirt" }).exec();

	return { props: { Products: JSON.parse(JSON.stringify(products)) } };
}
