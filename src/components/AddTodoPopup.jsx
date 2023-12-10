import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./AddTodoPopup.module.css";
import { useEffect, useRef, useState } from "react";
import moment from "moment/moment";
import { useTodos } from "../contexts/TodosContext";
function AddTodoPopup() {
	const { handleClosePopup, addTodo } = useTodos();
	const [title, setTitle] = useState("");
	const [detail, setDetail] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [category, setCategory] = useState("inbox");

	const textAreaRef = useRef(null);
	useEffect(
		function () {
			textAreaRef.current.style.height = "auto";
			textAreaRef.current.style.height =
				textAreaRef.current.scrollHeight + "px";
		},
		[detail]
	);

	function handleSubmit(e) {
		e.preventDefault();
		const newTodo = { title, detail, dueDate, category, id: Date.now() };
		console.log(newTodo);
		addTodo(newTodo);
		handleClosePopup();
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.add__todo__popup}>
				<div className={styles.inputs}>
					<input
						type="text"
						className={styles.title}
						placeholder="Task Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						value={detail}
						className={styles.details}
						placeholder="Description"
						onChange={(e) => setDetail(e.target.value)}
						ref={textAreaRef}
					/>
					<div>
						<DatePicker
							selected={dueDate}
							onChange={(date) => {
								if (date === null) {
									setDueDate("");
									return;
								}
								setDueDate(moment(date).endOf("day")._d);
							}}
							minDate={new Date()}
							shouldCloseOnSelect={true}
							placeholderText=" select Due Date"
							className={styles.todo__datepicker}
							isClearable
							todayButton="TODAY"
						/>
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.category}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
						>
							<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z" />
						</svg>
						<div role="button">Inbox</div>
						<span>&#x1F783;</span>
					</div>
					<div className={styles.buttons}>
						<button>Cancel</button>
						<button
							disabled={title === "" ? true : false}
							onClick={handleSubmit}
						>
							Add Task
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}

export default AddTodoPopup;
