import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

import Logo from "./Logo";
function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Logo />
			<ul>
				<li>
					<Link to="/pricing">Pricing</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li className={styles.login}>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
