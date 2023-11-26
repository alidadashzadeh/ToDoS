import { useTodos } from "../contexts/TodosContext";
import TodosList from "./TodosList";

function Inbox() {
	const { filteredTodos } = useTodos();

	return <TodosList todos={filteredTodos} />;
}

export default Inbox;
