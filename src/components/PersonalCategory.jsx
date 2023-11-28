import { useTodos } from "../contexts/TodosContext";

import TodosList from "./TodosList";

function PersonalCategory() {
	const { personalTodos } = useTodos();

	return <TodosList todos={personalTodos} />;
}

export default PersonalCategory;
