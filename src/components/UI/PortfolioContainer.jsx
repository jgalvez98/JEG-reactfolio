import "../UI/PortfolioContainer.css";
import React from "react"

export default function Cards() {
	return (
		<div className="container">
			<h1 className=" title white mb-4 font-weight-bold ">My Projects</h1>
			<div className="row justify-content-center" >
				<div className="card">
					<img src="./public/note-taker.png" className="card-img" alt="note taker" />
					<div className="card-body">
						<p className="cardText">A note taking app</p>
						<div className="row justify-content-center">
							<a href="https://github.com" className="cardBtn">Website</a>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="./public/recipeasy.png" className="card-img" alt="..." />
					<div className="card-body">
						<p className="cardText">Recipe finder app</p>
						<div className="row justify-content-center">
							<a href="https://github.com" className="cardBtn">Website</a>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="./public/weatherapp.png" className="card-img" alt="..." />
					<div className="card-body">
						<p className="cardText">Check a 5 day forecast in any city</p>
						<div className="row justify-content-center">
							<a href="" className="cardBtn">Website</a>
						</div>
					</div>
				</div>

			</div>

			<div className="row justify-content-center">

				<div className="card">
					<img src="./public/texteditor.png" className="card-img" alt="..." />
					<div className="card-body">
						<p className="cardText">create notes online or offline</p>
						<div className="row justify-content-center">
							<a href="" className="cardBtn">Website</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}