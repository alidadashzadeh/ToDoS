import { useTodos } from "../contexts/TodosContext";
import TodosList from "./TodosList";

function Upcoming() {
	const { upcomingTodos } = useTodos();

	return <TodosList todos={upcomingTodos} />;
}

export default Upcoming;
