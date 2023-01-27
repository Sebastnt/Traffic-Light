import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [change, setChange] = useState("");
	return (
		<div className="container m-5">
			<div className="traffic mx-auto text-center bg-dark"></div>
			<div className="main-box mx-auto text-center bg-dark rounded-5 p-1">
				<div className={`color bg-danger mt-2 ${(change === "red" ? "iluminado" : "")}`}  onClick={() => setChange("red")}></div>
				<div className={`color bg-warning ${(change === "yellow" ? "iluminado" : "")}`} onClick={() => setChange("yellow")} ></div>
				<div className={`color bg-success ${(change === "green" ? "iluminado" : "")}`} onClick={() => setChange("green")} ></div>
			</div>
		</div>
	);
};

export default Home;
