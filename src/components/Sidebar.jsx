import styles from "./Sidebar.module.css";

import { Link } from "react-router-dom";

import { useTodos } from "../contexts/TodosContext";
function Sidebar() {
	const {
		todos,
		todayTodos,
		upcomingTodos,
		personalTodos,
		businessTodos,
		familyTodos,
		filterType,
		setFilterType,
	} = useTodos();

	return (
		<div className={styles.sidebar}>
			<div className={styles.category__container}>
				<select
					id="category"
					value={filterType}
					onChange={(e) => setFilterType(e.target.value)}
					className={styles.category}
				>
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
				<div className={styles.icon__container}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
					</svg>
				</div>
			</div>
			<ul className={styles.list}>
				<li className={styles.list__item}>
					<Link to="inbox">
						<span>
							<span class="material-symbols-outlined">inbox</span>
							Inbox
						</span>
						<span>{todos.length}</span>
					</Link>
				</li>
				<li className={styles.list__item}>
					<Link to="today">
						<span>
							<span class="material-symbols-outlined">calendar_today</span>
							Today
						</span>
						<span>{todayTodos.length}</span>
					</Link>
				</li>
				<li className={styles.list__item}>
					<Link to="upcoming">
						<span>
							<span class="material-symbols-outlined">calendar_month</span>
							Upcoming
						</span>
						<span>{upcomingTodos.length}</span>
					</Link>
				</li>
			</ul>
			<ul className={styles.list}>
				<label>Categories</label>
				<li className={styles.list__item}>
					<Link to="personal">
						<span>
							<span class="material-symbols-outlined">person</span>Personal
						</span>
						<span>{personalTodos.length}</span>
					</Link>
				</li>
				<li className={styles.list__item}>
					<Link to="business">
						<span>
							<span class="material-symbols-outlined">work</span>Business
						</span>
						<span>{businessTodos.length}</span>
					</Link>
				</li>
				<li className={styles.list__item}>
					<Link to="family">
						<span>
							<span class="material-symbols-outlined">family_restroom</span>
							Family
						</span>
						<span>{familyTodos.length}</span>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
