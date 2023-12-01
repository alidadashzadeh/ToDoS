import { useEffect, useState } from "react";
import { useTodos } from "../contexts/TodosContext";

import TodosList from "./TodosList";
import { ascending, descending } from "../utils/Helper";
import ListHeader from "./ListHeader";

function Today() {
	const { todayTodos, sort } = useTodos();

	const [sortfiltered, setSortFiltered] = useState();

	useEffect(
		function () {
			if (sort) setSortFiltered(ascending(todayTodos.slice()));
			if (!sort) setSortFiltered(descending(todayTodos.slice()));
		},
		[sort, todayTodos]
	);

	return (
		<div>
			<ListHeader title={"Today"} />
			<TodosList todos={sortfiltered} />;
		</div>
	);
}

export default Today;
