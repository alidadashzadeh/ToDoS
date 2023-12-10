import styles from "./aPPlAYOUT.module.css";

import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import BlurBackground from "../components/BlurBackground";
import { useTodos } from "../contexts/TodosContext";
import AddTodoPopup from "../components/AddTodoPopup";

function AppLayout() {
	const { addTodoPopup, accountPopup } = useTodos();
	return (
		<div className={styles.app}>
			{accountPopup && <BlurBackground />}
			{addTodoPopup && <BlurBackground />}
			{addTodoPopup && <AddTodoPopup />}
			<Sidebar />
			<Outlet />
		</div>
	);
}

export default AppLayout;
