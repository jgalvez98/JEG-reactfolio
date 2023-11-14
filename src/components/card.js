import React from "react"

export default function Cards() {
	return (
		<div className="container">
			<div className="row justify-content-center">

				<div className="card bg-dark border-primary" style={{ width: '18rem' }}>
					<img src="./images/movieGrab.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">Movie Grab</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://ttdunlap33.github.io/movie-project/" className="cardBtn">Website</a>
								<a href="https://github.com/CodyG-2021/movie-project" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-dark border-primary" style={{ width: '18rem' }}>
					<img src="./images/brew3.png" className="card-img-top brewImg" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">You're My Boy Brew</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://afternoon-sands-66827.herokuapp.com/" className="cardBtn">Website</a>
								<a href="https://github.com/CodyG-2021/You-re-My-Boy-Brew" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-dark border-primary" style={{ width: '18rem' }}>
					<img src="./images/budget.png" className="card-img-top budgetImg" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">Budget Tracker</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://peaceful-river-08131.herokuapp.com/" className="cardBtn">Website</a>
								<a href="https://github.com/CodyG-2021/19-PWA-Budget-Tracker" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className="row justify-content-center">

				<div className="card bg-dark border-primary" style={{ width: '18rem' }}>
					<img src="./images/workout.png" className="card-img-top workoutImg" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">Fitness Tracker</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://serene-basin-23801.herokuapp.com/" className="cardBtn">Website</a>
								<a href="https://github.com/CodyG-2021/18-NoSQL-Workout-Tracker" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-dark border-primary" style={{ width: '18rem' }}>
					<img src="./images/tech.png" className="card-img-top techImg" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">Tech Blog</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://arcane-shore-27269.herokuapp.com/" className="cardBtn">Website</a>
								<a href="https://github.com/CodyG-2021/14-Model-View-Controller-MVC-Tech-Blog" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-dark border-primary" style={{ width: '18rem' }}>
					<img src="./images/note.png" className="card-img-top noteImg" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">Note Taker</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://murmuring-lowlands-95809.herokuapp.com/" className="cardBtn">Website</a>
								<a href="https://github.com/CodyG-2021/11-Express.js-Note-Taker" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}