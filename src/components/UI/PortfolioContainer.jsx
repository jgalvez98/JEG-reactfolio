import "../UI/PortfolioContainer.css";
import React from "react"

const PortfolioContainer = () => {


	return (
		<div className="container">
			<div class="title">
          <h1>My Projects</h1>
          <h1>My Projects</h1>
        </div>
			<div className="row justify-content-center" >

				<div className="card">
					<img src="./public/weatherapp.png" className="card-img" alt="..." />
					<div className="card-body">
						<p className="cardText">Check a 5 day forecast in any city</p>
						<div className="row justify-content-center">
							<a href="https://jgalvez98.github.io/jeg-ProWeather/" className="cardBtn">Website</a>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="./public/recipeasy.png" className="card-img" alt="..." />
					<div className="card-body">
						<p className="cardText">Recipe finder app</p>
						<div className="row justify-content-center">
							<a href="https://dashboard.heroku.com/apps/project-2-recipeasy" className="cardBtn">Website</a>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="./public/cruisecontrol.png" className="card-img" alt="note taker" />
					<div className="card-body">
						<p className="cardText">A cruise planner app</p>
						<div className="row justify-content-center">
							<a href="https://ivega16.github.io/cruisecontrol/" className="cardBtn">Website</a>
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
							<a href="https://jeg-texteditor-1f0435e08f5b.herokuapp.com/" className="cardBtn">Website</a>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="./public/workscheduler.png" className="card-img" alt="note taker" />
					<div className="card-body">
						<p className="cardText">A calendar app</p>
						<div className="row justify-content-center">
							<a href="https://jgalvez98.github.io/juanEG-work-day-scheduler/" className="cardBtn">Website</a>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="./public/note-taker.png" className="card-img" alt="note taker" />
					<div className="card-body">
						<p className="cardText">A note taking app</p>
						<div className="row justify-content-center">
							<a href="https://github.com/jgalvez98/JEG-NoteTaker" className="cardBtn">Website</a>
						</div>
					</div>
				</div>
	
			</div>
		</div>
	);
};
export default PortfolioContainer;