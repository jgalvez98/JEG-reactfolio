import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function gallery() {
	return (
		<div>
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="./"
						alt="PENDING"
					/>
					<Carousel.Caption>
						<h3 className="cardHeader" >PENDING</h3>
						<a className="iconLink cardBtn" href='https://github.com'>
							View Site
						</a>
						<a className="iconLink cardBtn" href='https://github.com'>
							Source Code
						</a>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src="./images/brew3.png"
						alt="You're My Boy Brew"
					/>
					<Carousel.Caption>
						<h3 className="cardHeader" >PENDING</h3>
						<a className="iconLink cardBtn" href='https://github.com'>
							View Site
						</a>
						<a className="iconLink cardBtn" href='https://github.com'>
							Source Code
						</a>
					</Carousel.Caption>
				</Carousel.Item>
				{/* <Carousel.Item>
					<img
						className="d-block w-100"
						src="./images/brew3.png"
						alt="You're my boy brew"
					/>
					<Carousel.Caption>
						<h3>You're My Boy Brew</h3>
						<a className="iconLink cardBtn" href='https://github.com'>
							Source Code
						</a>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="./images/budget.png"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<a className="iconLink cardCaption" href='https://github.com'>
							
						</a>
					</Carousel.Caption>
				</Carousel.Item> */}
			</Carousel>
		</div>
	);
}