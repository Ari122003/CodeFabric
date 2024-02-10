import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/States/Reducers/UserReducer";
import { MdAccountCircle } from "react-icons/md";

export default function Navbars({toast}) {
	const router = useRouter();
	const [droped, setdroped] = useState(false);
	const [prof, setprof] = useState(false);
	const token = useSelector((state) => state.User.token);
	const dispatch = useDispatch();

	const change = (e) => {
		router.push(`/${e.target.value}`);
	};

	const menuref = useRef(null);
	const profileref = useRef(null);

	const toggleMenu = () => {
		if (droped == false) {
			menuref.current.classList.remove("hidden");
			menuref.current.classList.add("sm:hidden");
			setdroped(true);
		} else {
			menuref.current.classList.remove("sm:hidden");
			menuref.current.classList.add("hidden");
			setdroped(false);
		}
	};

	const toggleProfile = () => {
		if (prof == false) {
			profileref.current.classList.remove("hidden");
			setprof(true);
		} else {
			profileref.current.classList.add("hidden");
			setprof(false);
		}
	};

	const logOut = () => {
        toast("suc","You are logged out")
		dispatch(addUser(null));
		profileref.current.classList.add("hidden");
		setprof(false);
	};

	return (
		<>
			<nav className="hedu shadow-md sticky top-0 z-50">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								onClick={toggleMenu}
								className="relative inline-flex items-center justify-center rounded-md p-2 toggle focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false">
								<span className="absolute -inset-0.5"></span>
								<span className="sr-only">Open main menu</span>

								<svg
									className="block h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>

								<svg
									className="hidden h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex flex-shrink-0 items-center">
								<img
									className="h-10 w-auto"
									src="icon.png"
									alt="Your Company"
								/>
								<span className="text-black text-2xl hidden md:block font-bold">
									Bongwear
								</span>
							</div>
							<div className="hidden sm:ml-6 md:ml-16 sm:block">
								<div className="flex space-x-4">
									<Link
										href="/"
										className=" navs rounded-md px-3 py-2 text-xl font-medium"
										aria-current="page">
										Home
									</Link>
									<Link
										href="/Contact"
										className="navs rounded-md px-3 py-2 text-xl font-medium">
										Contact us
									</Link>
									<Link
										href="/Orders"
										className="navs rounded-md px-3 py-2 text-xl font-medium">
										Orders
									</Link>
									<select
										className="navs rounded-md px-3 py-2 text-xl font-medium"
										onChange={change}>
										<option hidden>Categories</option>
										<option className="option">Tshirts</option>
										<option className="option">Panjabi</option>
										<option className="option">Saree</option>
										<option className="option">Mugs</option>
									</select>
								</div>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<Link href="/Cart">
							<FaCartPlus className="icon h-7 w-7 mt-[0.27rem] hidden md:inline-block" />
							</Link>
							<Link href="/Login" className={token == null ? "" : "hidden"}>
								<button className="inline-flex items-center but border-0 py-1 px-3 ml-2 focus:outline-none rounded text-base  md:mt-0 md:mr-2">
									Sign in
								</button>
							</Link>
							<div className="relative ml-3 ">
								<div className={token == null ? "hidden" : ""}>
									<button
										type="button"
										className="relative flex rounded-full text-sm "
										id="user-menu-button"
										aria-expanded="false"
										onClick={toggleProfile}
										aria-haspopup="true">
										<span className="absolute -inset-1.5"></span>
										<span className="sr-only">Open user menu</span>
										<MdAccountCircle className="h-8 w-8 mt-1 icon"/>
									</button>
								</div>

								<div
									className="absolute hidden right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
									role="menu"
									ref={profileref}
									aria-orientation="vertical"
									aria-labelledby="user-menu-button"
									tabindex="-1">
									<Link
										href="/Account"
										className="block px-4 py-2 navs text-xl"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-0">
										Your Profile
									</Link>
									<a
										href="#"
										className="block px-4 py-2 navs text-xl"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-1">
										Settings
									</a>
									<span
										href="#"
										className="block px-4 py-2 navs text-xl"
										onClick={logOut}
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-2">
										Log out
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="hidden" id="mobile-menu" ref={menuref}>
					<div className="space-y-1 px-2 pb-3 pt-2">
						<Link
							href="/Tshirts"
							className="navs block rounded-md px-3 py-2  font-medium"
							aria-current="page">
							Tshirts
						</Link>
						<Link
							href="/Panjabi"
							className="navs block rounded-md px-3 py-2 text-base font-medium">
							Punjabis
						</Link>
						<Link
							href="/Saree"
							className="navs block rounded-md px-3 py-2 text-base font-medium">
							Saree
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
