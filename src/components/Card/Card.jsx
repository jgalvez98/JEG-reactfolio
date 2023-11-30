import React from "react"
import "../Card/Card.css"

export default function Cards() {

	return (
		<div className="container">
			<div class="title">
          <h1>My Projects</h1>
          <h1>My Projects</h1>
        </div>
			<div className="row d-flex justify-content-center" >

				<div className="card">
					<img src="/public/weatherapp.jpg" className="card-img" alt="weather forecast" />
					<div className="card-body">
						<p className="cardText">Check a 5 day forecast in any city</p>
						<div className="row justify-content-center">
							<a href="https://jgalvez98.github.io/jeg-ProWeather/" className="cardBtn">Website</a>
							<a href="https://github.com/jgalvez98/jeg-ProWeather" className="cardBtn2">Github</a>

						</div>
					</div>
				</div>

				<div className="card">
					<img src="/public/recipeasy.jpg" className="card-img" alt="recipeasy" />
					<div className="card-body">
						<p className="cardText">Recipe finder app</p>
						<div className="row justify-content-center">
							<a href="https://dashboard.heroku.com/apps/project-2-recipeasy" className="cardBtn">Website</a>
							<a href="https://github.com/arceojoshua1994/full-stack-project-2" className="cardBtn2">Github</a>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="/public/cruisecontrol.jpg" className="card-img" alt="cruise planner" />
					<div className="card-body">
						<p className="cardText">A cruise planner app</p>
						<div className="row justify-content-center">
							<a href="https://ivega16.github.io/cruisecontrol/" className="cardBtn">Website</a>
							<a href="https://github.com/ivega16/cruisecontrol" className="cardBtn2">Github</a>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="/public/texteditor.jpg" className="card-img" alt="text editor" />
					<div className="card-body">
						<p className="cardText">create notes online or offline</p>
						<div className="row justify-content-center">
							<a href="https://jeg-texteditor-1f0435e08f5b.herokuapp.com/" className="cardBtn">Website</a>
							<a href="https://github.com/jgalvez98/JEG-TextEditor" className="cardBtn2">Github</a>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="/public/workscheduler.jpg" className="card-img" alt="scheduler" />
					<div className="card-body">
						<p className="cardText">A calendar app</p>
						<div className="row justify-content-center">
							<a href="https://jgalvez98.github.io/juanEG-work-day-scheduler/" className="cardBtn">Website</a>
							<a href="https://github.com/jgalvez98/juanEG-work-day-scheduler" className="cardBtn2">Github</a>
				</div>
					</div>
				</div>

				<div className="card">
					<img src="/note-taker.jpg" className="card-img" alt="note taker" />
					<div className="card-body">
						<p className="cardText">A note taking app</p>
						<div className="row justify-content-center">
							<a href="https://github.com/jgalvez98/JEG-NoteTaker" className="cardBtn">Website</a>
							<a href="https://github.com/jgalvez98/JEG-NoteTaker" className="cardBtn2">Github</a>

						</div>
					</div>
				</div>
	</div>
		</div>
	);
};