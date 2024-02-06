import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";

export default function Navbar() {
	const router = useRouter();
	const change = (e) => {
		router.push(`/${e.target.value}`);
	};
	return (
		<header className="text-white body-font shadow-2xl hedu sticky top-0 z-20">
			<div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row  items-center">
				<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<div className="w-14 h-14 p-2 rounded-full" viewBox="0 0 24 24">
						<Image src="/icon.jpg" height={100} width={100} alt="logo" />
					</div>

					<div className="ml-3 bg-white">
						<span className=" text-xl heding px-2">Bongwear</span>
					</div>
				</a>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-56  text-xl font-semibold	flex flex-wrap items-center  justify-center">
					<Link href="/">
						<span className="mx-3 md:mx-5 navs">Home</span>
					</Link>
					<Link href="/Contact">
						<span className="mx-3 md:mx-5  navs">Contact us</span>
					</Link>
					<Link href="/Orders">
						<span className="mx-3 md:mx-5 navs">Orders</span>
					</Link>
					<select
						name="Categories"
						className="mx-3 md:mx-5 select"
						onChange={change}>
						<option hidden>Categories</option>
						<option className="option">Tshirts</option>
						<option className="option">Panjabi</option>
						<option className="option">Saree</option>
						<option className="option">Mugs</option>
					</select>
				</nav>
				<Link href="/Cart">
					<FaCartPlus className="mx-5 h-8 w-8 md:mt-1 mt-5 icon" />
				</Link>
				<Link href="/Login">
					<button className="inline-flex items-center but border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 md:mr-5">
						Sign in
					</button>
				</Link>
			</div>
		</header>
	);
}
