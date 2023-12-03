import styles from "./Inbox.module.css";
import { useTodos } from "../contexts/TodosContext";
import Header from "./Header";

import TodosList from "./TodosList";

function Inbox() {
	const { todos, toggleSidebar } = useTodos();

	return (
		<div
			className={`${styles.inbox} ${toggleSidebar ? styles.expandList : ""}`}
		>
			<Header />
			<TodosList todos={todos} />;
		</div>
	);
}

export default Inbox;
