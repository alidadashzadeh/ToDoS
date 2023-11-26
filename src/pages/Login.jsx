import styles from "./Login.module.css";

import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom";

function Login() {
	return (
		<div className={styles.login}>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.signin__links}>
					<NavLink to="signup">NEW TO ToDoS?</NavLink>
					<NavLink to="signin">Already Registered</NavLink>
				</div>
				<Outlet />
			</div>
		</div>
	);
}

export default Login;
