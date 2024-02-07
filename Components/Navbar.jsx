import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { Navbar } from "flowbite-react";

export default function Navbars() {
	const router = useRouter();
	const change = (e) => {
		router.push(`/${e.target.value}`);
	};
	return (
		<Navbar fluid rounded className="shadow-md sticky top-0 z-50">
			<Navbar.Brand className="">
				<Navbar.Toggle className="md:mr-0 mr-2" />
				<img
					src="icon.png"
					className="mr-3 md:h-10 md:w-10 h-12 w-12"
					alt="Flowbite React Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Bongwear
				</span>
			</Navbar.Brand>

			<Navbar.Collapse className="md:ml-[16rem]">
				<Navbar.Link href="/" className="text-xl navs mt-1">
					Home
				</Navbar.Link>
				<Navbar.Link href="/Contact" className="text-xl navs mt-1">
					Contact us
				</Navbar.Link>
				<Navbar.Link href="/Orders" className="text-xl navs mt-1">
					Orders
				</Navbar.Link>
				<select name="Categories" className="md:mb-0 mb-2 select" onChange={change}>
					<option hidden>Categories</option>
					<option className="option">Tshirts</option>
					<option className="option">Panjabi</option>
					<option className="option">Saree</option>
					<option className="option">Mugs</option>
				</select>
			</Navbar.Collapse>
			<Link href="/Cart">
				<FaCartPlus className="md:ml-[14rem] ml-30 h-6 w-6 md:h-8 md:w-8 icon" />
			</Link>
			<Link href="/Login">
				<button className="inline-flex items-center but border-0 py-1 px-3 focus:outline-none rounded text-base mr-2  md:mt-0 md:mr-5">
					Sign in
				</button>
			</Link>
		</Navbar>
	);
}
