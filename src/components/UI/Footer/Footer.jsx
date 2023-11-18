import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImStackoverflow } from 'react-icons/im' ;

export default function Footer() {
	return (
		<footer className="footer" style={{backgroundColor: 'black' }}>
			<div className="container text-center" style={{ marginTop: '5%'}}>
				<div>
					<a className="iconLink" id='git-icon' href='https://github.com/jgalvez98'>
						<FaGithubSquare size={40} onMouseOver={({target})=>target.style.color="#03a9f4"} 
						onMouseOut={({target})=>target.style.color="white"} color='white'/>
					</a>
					{' '}
					<a className="iconLink" href='https://www.linkedin.com/signup'>
						<AiFillLinkedin size={40} onMouseOver={({target})=>target.style.color="#03a9f4"} 
						onMouseOut={({target})=>target.style.color="white"} color='white'/>
					</a>
					{' '}
					<a className="iconLink" href='https://stackoverflow.com/signup'>
						<ImStackoverflow  size={40} onMouseOver={({target})=>target.style.color="#03a9f4"} 
						onMouseOut={({target})=>target.style.color="white"} color='white'/>
					</a>
				</div>
			</div>
		</footer>
	);
}