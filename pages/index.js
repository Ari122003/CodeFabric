import React, { useRef, useState } from "react";
import { Inter } from "next/font/google";
import { Carousel } from "flowbite-react";
import Grid from "@mui/material/Grid";
import Product from "@/Models/ProductSchema";
import mongoose from "mongoose";
import { Popover } from "flowbite-react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ Products }) {
	const router = useRouter();
	return (
		<>
			<marquee behavior="scroll" direction="left" className="my-2">
				<div className="md:text-2xl w-[40rem] md:w-[60rem] h-16 items-center flex justify-center banner over rounded-lg text-white font-bold">
					<p className="">
						Welcome to Bongwear!!!!...বাংলার ঐতিহ্য , বাংলার সংস্কৃতি , বাংলার
						পরিধান
					</p>
				</div>
			</marquee>

			<div className="h-56  md:h-[32rem] my-5 ">
				<Carousel>
					<img src="ad1.jpg" className="" alt="..." />
					<img src="ad2.jpg" alt="..." />
					<img src="ad3.jpg" alt="..." />
				</Carousel>
			</div>

			<section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-20">
						<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
							Our Collections
						</h1>
					</div>
					<div class="md:flex flex-wrap -m-4 hidden ">
						<div
							class="lg:w-1/3 sm:w-1/2 p-4 "
							onClick={() => {
								router.push("/Tshirts");
							}}>
							<div class="flex relative h-72 ">
								<img
									alt="gallery"
									class="absolute inset-0 rounded-md w-full h-full object-cover object-center"
									src="ts.jpg"
									loading="lazy"
								/>
								<div class="px-8 py-10 relative z-10 rounded-md w-full text-center items-center flex justify-center border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
									<h2 class="tracking-widest text-xl title-font font-medium navs  mb-1">
										Tshirts
									</h2>
								</div>
							</div>
						</div>
						<div
							class="lg:w-1/3 sm:w-1/2 p-4 "
							onClick={() => {
								router.push("/Panjabi");
							}}>
							<div class="flex relative h-72 ">
								<img
									alt="gallery"
									class="absolute inset-0 rounded-md w-full h-full object-cover object-center"
									src="pb.jpg"
									loading="lazy"
								/>
								<div class="px-8 py-10 relative z-10 rounded-md w-full text-center items-center flex justify-center border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
									<h2 class="tracking-widest text-xl title-font font-medium navs  mb-1">
										Punjabis
									</h2>
								</div>
							</div>
						</div>
						<div
							class="lg:w-1/3 sm:w-1/2 p-4 "
							onClick={() => {
								router.push("/Saree");
							}}>
							<div class="flex relative h-72 ">
								<img
									alt="gallery"
									class="absolute inset-0 rounded-md w-full h-full object-cover object-center"
									src="sr.jpg"
									loading="lazy"
								/>
								<div class="px-8 py-10 relative z-10 rounded-md w-full text-center items-center flex justify-center border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
									<h2 class="tracking-widest text-xl title-font font-medium navs  mb-1">
										Sarees
									</h2>
								</div>
							</div>
						</div>
						<div className="flex justify-center w-full">
							<div class="lg:w-1/3 sm:w-1/2 p-4 ">
								<div class="flex relative h-72 ">
									<img
										alt="gallery"
										class="absolute inset-0 rounded-md w-full h-full object-cover object-center"
										src="st.jpg"
										loading="lazy"
									/>
									<div class="px-8 py-10 relative z-10 rounded-md w-full text-center items-center flex justify-center border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
										<h2 class="tracking-widest text-xl title-font font-medium navs  mb-1">
											Shirts
										</h2>
									</div>
								</div>
							</div>
							<div class="lg:w-1/3 sm:w-1/2 p-4 ">
								<div class="flex relative h-72 ">
									<img
										alt="gallery"
										class="absolute inset-0 rounded-md w-full h-full object-cover object-center"
										src="bg.jpg"
										loading="lazy"
									/>
									<div class="px-8 py-10 relative z-10 rounded-md w-full text-center items-center flex justify-center border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
										<h2 class="tracking-widest text-xl title-font font-medium navs  mb-1">
											Bags
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="md:hidden">
						<Grid
							container
							rowSpacing={3}
							columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
							<Grid item xs={6}>
								<img
									onClick={() => {
										router.push("/Tshirts");
									}}
									alt="gallery"
									class=" inset-0 rounded-md  object-cover object-center"
									src="ts.jpg"
									loading="lazy"
								/>
							</Grid>
							<Grid item xs={6}>
								<img
								onClick={()=>{
									router.push("/Panjabi")
								}}
									alt="gallery"
									class=" inset-0 rounded-md  object-cover object-center"
									src="pb.jpg"
									loading="lazy"
								/>
							</Grid>
							<Grid item xs={6}>
								<img
								onClick={()=>{
									router.push("/Saree")
								}}
									alt="gallery"
									class=" inset-0 rounded-md  object-cover object-center"
									src="sr.jpg"
									loading="lazy"
								/>
							</Grid>
							<Grid item xs={6}>
								<img
									alt="gallery"
									class=" inset-0 rounded-md  object-cover object-center"
									src="st.jpg"
									loading="lazy"
								/>
							</Grid>
						</Grid>
					</div>
				</div>
			</section>
		</>
	);
}

export async function getServerSideProps() {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.URI);
	}

	const products = await Product.find().exec();

	return { props: { Products: JSON.parse(JSON.stringify(products)) } };
}
