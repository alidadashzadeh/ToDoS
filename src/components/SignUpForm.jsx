import { Link } from "react-router-dom";
import styles from "./SignUpForm.module.css";

function SignUpForm() {
	return (
		<form className={styles.signup}>
			<div>SIGN UP ToDoS</div>
			<label for="email">EMAIL ADDRESS:</label>
			<input type="text" id="email" required autoComplete="off" />
			<label for="password1">Password:</label>
			<input type="password" id="password1" required autoComplete="off" />
			<label for="password2">Confirm Password:</label>
			<input type="text" id="password2" required autoComplete="off" />
			<div className={styles.already__member}>
				<span>Already a member?</span>
				<Link to="/login/signin">SIGN IN</Link>
			</div>
			<button>SIGN UP</button>
		</form>
	);
}

export default SignUpForm;
