import { useState } from "react";
import styles from "./Sidebar.module.css";
import AccountPopup from "./AccountPopup";
import { useTodos } from "../contexts/TodosContext";
import { Link } from "react-router-dom";

const username = "alidadashzadeh94";

function Sidebar() {
	const {
		accountPopup,
		handleAccountPopup,
		toggleSidebar,
		setToggleSidebar,
		handleAddTodoPopup,
	} = useTodos();

	const [tab, setTab] = useState("inbox");

	return (
		<div
			className={`${styles.sidebar} ${
				toggleSidebar ? styles.hide__sidebar : ""
			}`}
		>
			<div className={styles.content}>
				{accountPopup && <AccountPopup />}
				<div className={styles.account}>
					<div
						className={styles.account__info}
						role="button"
						onClick={handleAccountPopup}
					>
						<img src="../user.jpg" />
						<div className={styles.username}>
							{username.length > 11 ? `${username.slice(0, 11)}...` : username}
						</div>
						<div className={styles.arrowdown}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
							>
								<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
							</svg>
						</div>
					</div>
					<div className={styles.notification__btn}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								fill-rule="evenodd"
								d="m6.585 14.888-.101.113c-.286.322-.484.584-.484 1h12c0-.416-.198-.678-.484-1l-.101-.113c-.21-.233-.455-.505-.7-.887-.213-.33-.355-.552-.458-.79-.209-.483-.256-1.036-.4-2.71-.214-3.5-1.357-5.5-3.857-5.5s-3.643 2-3.857 5.5c-.144 1.674-.191 2.227-.4 2.71-.103.238-.245.46-.457.79a6.583 6.583 0 0 1-.701.887Zm10.511-2.313c-.083-.34-.131-.861-.241-2.147-.113-1.811-.469-3.392-1.237-4.544C14.8 4.657 13.57 4 12 4c-1.571 0-2.8.656-3.618 1.883-.768 1.152-1.124 2.733-1.237 4.544-.11 1.286-.158 1.807-.241 2.147-.062.254-.13.373-.46.885a5.182 5.182 0 0 1-.57.722c-.074.082-.15.167-.232.262C5.35 14.786 5 15.266 5 16a1 1 0 0 0 1 1h3a3 3 0 0 0 6 0h3a1 1 0 0 0 1-1c0-.735-.35-1.215-.642-1.557-.082-.095-.158-.18-.232-.262a5.176 5.176 0 0 1-.57-.722c-.33-.512-.398-.631-.46-.885ZM14 17.001h-4a2 2 0 1 0 4 0Z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
					<div
						role="button"
						onClick={() => setToggleSidebar((s) => !s)}
						className={`${styles.toggle__btn} ${
							toggleSidebar ? styles.toggled : ""
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								fill-rule="evenodd"
								d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
				</div>
				<div
					className={styles.addtask}
					role="button"
					onClick={() => handleAddTodoPopup(true)}
				>
					<div className={styles.addtask__btn}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
						>
							<path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
						</svg>
					</div>
					<div className={styles.addtask__content}>Add Task</div>
				</div>
				<div className={styles.search}>
					<div className={styles.search__btn}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
						>
							<path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
						</svg>
					</div>
					<div className={styles.search__content}>Search</div>
				</div>
				<div
					className={`${styles.inbox} ${
						tab === "inbox" ? styles.selected : ""
					}`}
					role="button"
					onClick={() => setTab("inbox")}
				>
					<Link to="inbox">
						<div className={styles.inbox__content}>
							<div className={styles.inbox__btn}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
								>
									<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z" />
								</svg>
							</div>
							<div>Inbox</div>
						</div>
						<div className={styles.inbox__number}>4</div>
					</Link>
				</div>
				<div
					className={`${styles.today} ${
						tab === "today" ? styles.selected : ""
					}`}
					role="button"
					onClick={() => setTab("today")}
				>
					<Link to="today">
						<div className={styles.today__content}>
							<div className={styles.today__btn}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
								>
									<path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
								</svg>
							</div>
							<div>Today</div>
						</div>
						<div className={styles.inbox__number}>4</div>
					</Link>
				</div>
				<div
					className={`${styles.upcoming} ${
						tab === "upcoming" ? styles.selected : ""
					}`}
					role="button"
					onClick={() => setTab("upcoming")}
				>
					<Link to="upcoming">
						<div className={styles.upcoming__content}>
							<div className={styles.upcoming__btn}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
								>
									<path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
								</svg>
							</div>
							<div>Upcoming</div>
						</div>
						<div className={styles.inbox__number}>2</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
