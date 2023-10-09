import './Menu.css';
const Menu = (props) => {
	console.log();
	return (
		<nav>
			<ul>
				<MenuItem />
			</ul>
		</nav>
	);
};
export default Menu;

const MenuItem = (props) => {
	return (
		<>
			<li>Component</li>
		</>
	);
};
