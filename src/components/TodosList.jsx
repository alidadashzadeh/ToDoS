import TodoItem from "./TodoItem";

import styles from "./TodosList.module.css";

function TodosList({ todos }) {
	return (
		<ul>
			{todos?.length === 0 ? (
				<div className={styles.message}>nothing to show</div>
			) : (
				todos?.map((todo) => <TodoItem todo={todo} key={todo.id} />)
			)}
		</ul>
	);
}

export default TodosList;
