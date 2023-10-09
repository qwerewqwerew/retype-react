import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';
export default function App() {
	const [menu, showMenu] = useState('null');
	const menuHandler = () => {
		console.log('dd');
	};
	return (
		<>
			<div className="App">
				<header>
					<nav>
						<Link
							href="#home"
							id="logo"
						>
							Site Logo
						</Link>
						<FontAwesomeIcon
							icon={faBars}
							id="ham-menu"
							onClick={() => menuHandler}
						/>
						<div id="nav-bar">
							<Link href="/">Home</Link>
							<Link href="/">About</Link>
							<Link href="/">Service</Link>
							<Link href="/">Team</Link>
							<Link href="/">Team</Link>
						</div>
					</nav>
				</header>
			</div>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="about"
						element={<About />}
					/>
					<Route
						path="service"
						element={<Service />}
					/>
					<Route
						path="team"
						element={<Team />}
					/>
					<Route
						path="contact"
						element={<Contact />}
					/>
				</Route>
			</Routes>
		</>
	);
}

const Home = (props) => {
	return (
		<>
			<div>Home</div>
		</>
	);
};
const About = (props) => {
	return (
		<>
			<div>About</div>
		</>
	);
};
const Service = (props) => {
	return (
		<>
			<div>Home</div>
		</>
	);
};
const Team = (props) => {
	return (
		<>
			<div>Team</div>
		</>
	);
};
const Contact = (props) => {
	return (
		<>
			<div>Contact</div>
		</>
	);
};
