import { useTodos } from "../contexts/TodosContext";
import { useEffect, useState } from "react";
import { ascending, descending } from "../utils/Helper";
import ListHeader from "./ListHeader";
import TodosList from "./TodosList";

function BusinessCategory() {
	const { businessTodos, sort } = useTodos();
	const [sortfiltered, setSortFiltered] = useState();

	useEffect(
		function () {
			if (sort) setSortFiltered(ascending(businessTodos.slice()));
			if (!sort) setSortFiltered(descending(businessTodos.slice()));
		},
		[sort, businessTodos]
	);

	return (
		<div>
			<ListHeader title={"Business"} />
			<TodosList todos={sortfiltered} />
		</div>
	);
}

export default BusinessCategory;
