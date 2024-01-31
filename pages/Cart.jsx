import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
	const products = useSelector((state) => state.Cart);
	useEffect(()=>{
		console.log(products)
	})
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="text-4xl font-medium title-font mb-4 text-gray-900">
						Your cart
					</h1>
					<p hidden className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Your cart is empty
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					<div className="p-4 lg:w-1/4 md:w-1/2">
						<div className="h-full flex flex-col items-center text-center">
							<img
								alt="team"
								className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
								src="https://dummyimage.com/200x200"
							/>
							<div className="w-full">
								<h2 className="title-font font-medium text-lg text-gray-900">
									Rabindranath
								</h2>
								<h3 className="text-gray-500 mb-3">1</h3>
								<p className="mb-4">
									DIY tote bag drinking vinegar cronut adaptogen squid fanny
									pack vaporware.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
