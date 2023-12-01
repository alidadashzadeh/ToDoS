import { useEffect, useState } from "react";
import { useTodos } from "../contexts/TodosContext";
import { ascending, descending } from "../utils/Helper";
import TodosList from "./TodosList";
import ListHeader from "./ListHeader";

function Upcoming() {
	const { upcomingTodos, sort } = useTodos();

	const [sortfiltered, setSortFiltered] = useState();

	useEffect(
		function () {
			if (sort) setSortFiltered(ascending(upcomingTodos.slice()));
			if (!sort) setSortFiltered(descending(upcomingTodos.slice()));
		},
		[sort, upcomingTodos]
	);

	return (
		<div>
			<ListHeader title={"Upcoming"} />
			<TodosList todos={sortfiltered} />
		</div>
	);
}

export default Upcoming;
