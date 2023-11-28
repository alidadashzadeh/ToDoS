/* eslint-disable react/prop-types */
import { useTodos } from "../contexts/TodosContext";
import { dueDate } from "../utils/Helper";
import moment from "moment";

import styles from "./TodoItem.module.css";

function TodoItem({ todo }) {
	const { deleteTodo, editTodo, completedTodo } = useTodos();

	return (
		// <li className={styles.todo__item}>
		<li
			className={`${styles.todo__item} ${
				todo.completed ? styles.completed : ""
			}`}
		>
			<input
				type="checkbox"
				id={todo.id}
				onChange={() => completedTodo(todo.id)}
				checked={todo.completed}
			/>
			<label htmlFor={todo.id} className={styles.todo__content}>
				<p className={styles.todo__title}>{todo.title}</p>
				{todo.duedate && (
					<p className={styles.due__date}>{moment(todo.duedate).calendar()}</p>
				)}
			</label>
			{todo.priority && (
				<div className={styles.priority}>
					<input
						type="checkbox"
						id={`${todo.id}flag`}
						checked={todo.priority}
					/>
					<label htmlFor={`${todo.id}flag`}>Priority</label>
				</div>
			)}
			<div className={styles.buttons}>
				<button onClick={() => deleteTodo(todo.id)}>delete</button>
				<button onClick={() => editTodo(todo.id)}>Edit</button>
			</div>
		</li>
	);
}

export default TodoItem;
