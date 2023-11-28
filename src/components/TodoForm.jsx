import styles from "./TodoForm.module.css";

import moment from "moment";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useTodos } from "../contexts/TodosContext";

function TodoForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [priority, setPriority] = useState(false);
	const [duedate, setDuedate] = useState("");
	const [category, setCategory] = useState("personal");

	const { addTodo, todos, editingID, terminateUpdateTodo, updateTodo } =
		useTodos();

	// console.log(moment(duedate));

	useEffect(
		function () {
			if (editingID === "") return;
			const editingTodo = todos.find((todo) => todo.id === editingID);
			setTitle(editingTodo?.title);
			setDescription(editingTodo?.description);
			setPriority(editingTodo?.priority);
			setCategory(editingTodo.category);
			if (editingTodo.duedate) setDuedate(new Date(editingTodo?.duedate));
		},
		[editingID, todos]
	);

	function resetStates() {
		setDescription("");
		setTitle("");
		setPriority(false);
		// setDuedate(new Date(Date.now() + 84600000));
		setDuedate("");
		setCategory("personal");
	}
	function handleSubmit(e) {
		e.preventDefault();
		// if (!title || !description) return;
		if (!title) return;
		const newTodo = {
			title,
			description,
			priority,
			id: Date.now(),
			duedate,
			category,
		};
		addTodo(newTodo);
		resetStates();
	}

	function cancelUpdateTodo() {
		resetStates();
		terminateUpdateTodo();
	}

	function handleUpdateTodo(e) {
		e.preventDefault();
		if (!title) return;
		const updatedTodo = { title, description, priority, duedate, category };
		updateTodo(updatedTodo);
		resetStates();
		terminateUpdateTodo();
	}

	return (
		<form
			className={styles.todo__form}
			onSubmit={editingID ? handleUpdateTodo : handleSubmit}
		>
			<div className={styles.first__row}>
				<input
					className={styles.todo__title}
					type="text"
					id="title"
					value={title}
					// required
					placeholder="Task Title"
					onChange={(e) => setTitle(e.target.value)}
				/>

				<DatePicker
					selected={duedate}
					onChange={(date) => {
						// console.log(moment(new Date()).endOf("day"));
						setDuedate(moment(date).endOf("day")._d);
						// setDuedate(moment(date)._i);
					}}
					minDate={new Date()}
					className={styles.todo__datepicker}
				/>
				<div className={styles.category__container}>
					<select
						id="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className={styles.category}
					>
						<option value="personal">Personal</option>
						<option value="business">Business</option>
						<option value="family">family</option>
					</select>
					<div className={styles.icon__container}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
						</svg>
					</div>
				</div>
				<div className={styles.todo__priority}>
					<input
						type="checkbox"
						id="priroty__form"
						onChange={() => setPriority((s) => !s)}
						checked={priority}
					/>
					<label htmlFor="priroty__form">Priority</label>
				</div>
				{editingID && (
					<button onClick={cancelUpdateTodo} className={styles.cancel__btn}>
						Cancel
					</button>
				)}
				<button
					className={styles.submit__btn}
					onClick={editingID ? handleUpdateTodo : handleSubmit}
				>
					{editingID ? "Update todo" : "ADD ToDo"}
				</button>
			</div>
			<textarea
				value={description}
				className={styles.todo__description}
				id="description"
				// required
				placeholder="Description"
				rows="4"
				cols="50"
				onChange={(e) => setDescription(e.target.value)}
			/>
		</form>
	);
}

export default TodoForm;
