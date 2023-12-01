import { useTodos } from "../contexts/TodosContext";
import { useEffect, useState } from "react";
import { ascending, descending } from "../utils/Helper";
import ListHeader from "./ListHeader";
import TodosList from "./TodosList";

function FamilyCategory() {
	const { familyTodos, sort } = useTodos();
	const [sortfiltered, setSortFiltered] = useState();

	useEffect(
		function () {
			if (sort) setSortFiltered(ascending(familyTodos.slice()));
			if (!sort) setSortFiltered(descending(familyTodos.slice()));
		},
		[sort, familyTodos]
	);

	return (
		<div>
			<ListHeader title={"Business"} />
			<TodosList todos={sortfiltered} />
		</div>
	);
}

export default FamilyCategory;
