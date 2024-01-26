import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa6";

export default function Navbar() {
	return (
		<header class="text-white body-font shadow-2xl hedu">
			<div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row  items-center">
				<Image src="/logo.jpg" height={100} width={100} alt="logo" />
				<nav class="md:mr-auto md:ml-4 md:py-1 md:pl-64  text-xl font-semibold	flex flex-wrap items-center  justify-center">
					<Link href="/Latest">
						<span class="mx-3 md:mx-5 navs">Latest</span>
					</Link>
					<Link href="/Contact">
						<span class="mx-3 md:mx-5  navs">Contact us</span>
					</Link>
					<span class="mx-3 md:mx-5  navs">Categories</span>
				</nav>
				<FaCartPlus className="mx-5 h-8 w-8 md:mt-1 mt-5 icon" />
				<button class="inline-flex items-center but border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 md:mr-5">
					Button
				</button>
			</div>
		</header>
	);
}
