import { useTodos } from "../contexts/TodosContext";
import TodosList from "./TodosList";

function BusinessCategory() {
	const { businessTodos } = useTodos();

	return <TodosList todos={businessTodos} />;
}

export default BusinessCategory;
