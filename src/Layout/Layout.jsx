import React from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<>
			<div className="dark:bg-[#0c0328] bg-stone-200 transition-all duration-500 text-black dark:text-stone-100  w-full h-screen flex flex-col items-center">
				<Navbar />
				<Login />
			</div>
			{/* Navbar */}
		</>
	);
};

export default Layout;
