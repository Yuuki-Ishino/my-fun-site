"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hamburger({ navItems, session}) {
	const [isOpen, setIsOpen] = useState(false);

	const barColor = session ? "bg-green-400" : "bg-white";
	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<div className="lg:hidden mr-5">
			{isOpen ? (
				<button
					onClick={toggleMenu}
					className="focus:outline-none  active:bg-gray-700"
				>
					<div className="w-6 font-bold">X</div>
				</button>
			) : (
				<button
					onClick={toggleMenu}
					className="focus:outline-none  active:bg-gray-700"
				>
					<div className={`w-6 h-0.5 ${barColor} mb-2`}></div>
					<div className={`w-6 h-0.5 ${barColor}`}></div>
				</button>
			)}

			{/* ドロップダウンメニュー */}
			<div
				className={`absolute right-0 mt-5 w-45 bg-black flex flex-col transition-transfform ease-in-out duration-700
					${isOpen ? "translate-x-0" : "translate-x-full"}`}
			>
				<ul>
					{navItems.map((item, index) => (
						<li key={index} className="font-bold border-t border-gray-700 mx-2">
							<Link
								href={item.href}
								className="block px-5 py-5 hover:opacity-80 active:bg-gray-700"
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}