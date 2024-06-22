import React, { useRef, useState } from "react";
import { Inter } from "next/font/google";
import { Carousel } from "flowbite-react";
import Grid from "@mui/material/Grid";
import Product from "@/Models/ProductSchema";
import mongoose from "mongoose";
import { Popover } from "flowbite-react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const router = useRouter();
	return (
		<>
			<div
				id="sticky-banner"
				tabindex="-1"
				class=" top-0 start-0 z-50 flex justify-between ban p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
				<div class="flex items-center mx-auto">
					<p class="flex items-center text-sm font-normal text-black dark:text-gray-400">
						<span class="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
							<svg
								class="w-3 h-3 text-[#8b008b] dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 18 19">
								<path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
							</svg>
							<span class="sr-only">Light bulb</span>
						</span>
						<span className="text-xl">
							Welcome to Bongwear!!!!...বাংলার ঐতিহ্য , বাংলার সংস্কৃতি , বাংলার
							পরিধান
						</span>
					</p>
				</div>
			</div>

			{/* Heading */}

			<div class="grid gap-4 mt-2">
				<div className="flex justify-center">
					<img
						class=" max-h-[32rem] w-[32rem]  rounded-lg"
						src="back.jpeg"
						alt=""
					/>
				</div>
				<div class="grid grid-cols-5 gap-4 ">
					<div>
						<img class="md:h-full  h-auto  rounded-lg zoom" src="punj.jpg" alt="" />
					</div>
					<div>
						<img class=" md:h-full h-auto rounded-lg zoom" src="saree.jpeg" alt="" />
					</div>
					<div>
						<img class="md:h-full  h-auto rounded-lg zoom" src="ts.jpeg" alt="" />
					</div>
					<div>
						<img class=" md:h-full h-auto rounded-lg zoom" src="bag.jpeg" alt="" />
					</div>
					<div>
						<img class="md:h-full  h-auto rounded-lg zoom" src="mug.jpeg" alt="" />
					</div>
				</div>
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
									onClick={() => {
										router.push("/Panjabi");
									}}
									alt="gallery"
									class=" inset-0 rounded-md  object-cover object-center"
									src="pb.jpg"
									loading="lazy"
								/>
							</Grid>
							<Grid item xs={6}>
								<img
									onClick={() => {
										router.push("/Saree");
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
