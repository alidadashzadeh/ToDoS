import { useTodos } from "../contexts/TodosContext";
import { useEffect, useState } from "react";
import { ascending, descending } from "../utils/Helper";

import TodosList from "./TodosList";
import ListHeader from "./ListHeader";

function Inbox() {
	const { filteredTodos, sort } = useTodos();

	const [sortfiltered, setSortFiltered] = useState();

	useEffect(
		function () {
			if (sort) setSortFiltered(ascending(filteredTodos.slice()));
			if (!sort) setSortFiltered(descending(filteredTodos.slice()));
		},
		[sort, filteredTodos]
	);

	return (
		<div>
			<ListHeader title={"Inbox"} />
			<TodosList todos={sortfiltered} />;
		</div>
	);
}

export default Inbox;
