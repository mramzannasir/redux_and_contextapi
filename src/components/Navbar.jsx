import React, { useState, useEffect } from "react";

const Navbar = () => {
	const [theme, setTheme] = useState("light");

	// if local storage is empty save theme as light
	useEffect(() => {
		if (localStorage.getItem("theme") === null) {
			localStorage.setItem("theme", "light");
		}
	}, []);

	useEffect(() => {
		// select html elem
		const html = document.querySelector("html");
		//add or remove class dark in html elem according to theme in localstorage.
		if (localStorage.getItem("theme") === "dark") {
			html.classList.add("dark");
			setTheme("dark");
		} else {
			html.classList.remove("dark");
			setTheme("light");
		}
	}, [theme]);

	// handle switch theme
	const handleThemeSwitch = () => {
		if (localStorage.getItem("theme") === "light") {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		} else {
			setTheme("light");
			localStorage.setItem("theme", "light");
		}
	};
	return (
		<>
			<header className=" w-[90%] body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a className="flex title-font font-medium items-center  mb-4 md:mb-0">
						<span className="ml-3 text-xl">Logo</span>
					</a>
					<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
						<a className="mr-5 hover:text-white">First Link</a>
						<a className="mr-5 hover:text-white">Second Link</a>
						<a className="mr-5 hover:text-white">Third Link</a>
						<a className="mr-5 hover:text-white">Fourth Link</a>
					</nav>
					<button
						onClick={handleThemeSwitch}
						className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
						Mode
					</button>
				</div>
			</header>
		</>
	);
};

export default Navbar;
