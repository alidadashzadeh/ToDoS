import { useTodos } from "../contexts/TodosContext";

import TodosList from "./TodosList";

function Today() {
	const { todayTodos } = useTodos();

	return <TodosList todos={todayTodos} />;
}

export default Today;
