import styles from "./ListHeader.module.css";

import { useTodos } from "../contexts/TodosContext";

function ListHeader({ title }) {
	const { filteredTodos, sort, setSort } = useTodos();

	return (
		<div className={styles.header}>
			<div>
				<h2>{title}</h2>
				<h4>{filteredTodos.length} Tasks</h4>
			</div>
			<div>
				<span>Sort Date:</span>
				<button onClick={() => setSort((s) => !s)}>
					{sort ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="10"
							viewBox="0 0 320 512"
						>
							<path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="10"
							viewBox="0 0 320 512"
						>
							<path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
						</svg>
					)}
				</button>
			</div>
		</div>
	);
}

export default ListHeader;
