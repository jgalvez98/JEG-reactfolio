import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImStackoverflow } from 'react-icons/im' ;

export default function Footer() {
	return (
		<footer className="footer pt-1">
			<div className="container text-center">
				<div>
					<a className="iconLink" id='git-icon' href='https://github.com'>
						<FaGithubSquare size={40} color='white'/>
					</a>
					<a className="iconLink" href='https://www.linkedin.com'>
						<AiFillLinkedin size={45} color='white' />
					</a>
					<a className="iconLink" href='https://stackoverflow.com'>
						<ImStackoverflow size={35} color='white'/>
					</a>
				</div>
			</div>
		</footer>
	);
}