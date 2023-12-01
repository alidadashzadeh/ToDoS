import { useEffect, useState } from "react";
import { useTodos } from "../contexts/TodosContext";
import { ascending, descending } from "../utils/Helper";
import ListHeader from "./ListHeader";

import TodosList from "./TodosList";

function PersonalCategory() {
	const { personalTodos, sort } = useTodos();

	const [sortfiltered, setSortFiltered] = useState();

	useEffect(
		function () {
			if (sort) setSortFiltered(ascending(personalTodos.slice()));
			if (!sort) setSortFiltered(descending(personalTodos.slice()));
		},
		[sort, personalTodos]
	);

	return (
		<div>
			<ListHeader title={"Personal"} />
			<TodosList todos={sortfiltered} />
		</div>
	);
}

export default PersonalCategory;
