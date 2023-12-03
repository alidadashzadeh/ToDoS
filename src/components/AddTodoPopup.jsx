import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./AddTodoPopup.module.css";
import { useState } from "react";
import moment from "moment/moment";
function AddTodoPopup() {
	const [dueDate, setDueDate] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();

		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.add__todo__popup}>
			<input type="text" className={styles.title} placeholder="Task Title" />
			<input type="text" className={styles.details} placeholder="Details" />
			<div>
				<DatePicker
					selected={dueDate}
					onChange={(date) => {
						setIsOpen(!isOpen);
						if (date === null) {
							setDueDate("");
							return;
						}
						setDueDate(moment(date).endOf("day")._d);
					}}
					minDate={new Date()}
					shouldCloseOnSelect={false}
					placeholderText=" select Due Date"
					className={styles.todo__datepicker}
					isClearable
					todayButton="TODAY"
				/>
			</div>
		</div>
	);
}

export default AddTodoPopup;
