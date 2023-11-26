import { useTodos } from "../contexts/TodosContext";
import TodosList from "./TodosList";

function FamilyCategory() {
	const { familyTodos } = useTodos();

	return <TodosList todos={familyTodos} />;
}

export default FamilyCategory;
