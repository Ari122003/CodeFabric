import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

export default function Lowerpanel() {
	return (
		<div className="sticky bottom-0 z-50 md:hidden flex low justify-evenly h-10 ">
			<Link href="/">
				<IoHome className="h-7 w-7 text-white mt-[0.27rem]" />
			</Link>
			<Link href="/Cart">
				<FaCartPlus className="text-white h-7 w-7 mt-[0.27rem] " />
			</Link>
		</div>
	);
}
