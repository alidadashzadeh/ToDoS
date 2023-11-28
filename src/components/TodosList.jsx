import TodoItem from "./TodoItem";

import styles from "./TodosList.module.css";

function TodosList({ todos }) {
	return (
		<ul className={styles.todos__list}>
			{todos.length === 0 ? (
				<div className={styles.message}>nothing to show</div>
			) : (
				todos?.map((todo) => <TodoItem todo={todo} key={todo.id} />)
			)}
		</ul>
	);
}

export default TodosList;
