import { useTodos } from "../contexts/TodosContext";
import styles from "./BlurBackground.module.css";

function BlurBackground() {
	const { handleClosePopup } = useTodos();

	return (
		<div
			className={styles.blur__background}
			role="button"
			onClick={handleClosePopup}
		></div>
	);
}

export default BlurBackground;
