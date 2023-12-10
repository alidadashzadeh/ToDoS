/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const todosContext = createContext();

function TodosProvider({ children }) {
	const [todos, setTodos] = useState(function () {
		const storedTodos = localStorage.getItem("todos");
		return storedTodos ? JSON.parse(storedTodos) : [];
	});
	const [editingID, setEditingID] = useState("");
	const [toggleSidebar, setToggleSidebar] = useState(false);
	const [accountPopup, setAccountPopup] = useState(false);
	const [addTodoPopup, setAddTodoPopup] = useState(false);

	useEffect(
		function () {
			localStorage.setItem("todos", JSON.stringify(todos));
		},
		[todos]
	);

	function addTodo(newTodo) {
		setTodos((s) => [...s, newTodo]);
	}

	function deleteTodo(id) {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	}

	function editTodo(id) {
		setEditingID(id);
	}

	function updateTodo(updatedTodo) {
		setTodos((todos) =>
			todos.map((todo) => {
				if (todo.id === editingID)
					return {
						...todo,
						title: updatedTodo.title,
						description: updatedTodo.description,
						priority: updatedTodo.priority,
						duedate: updatedTodo.duedate,
						category: updatedTodo.category,
					};
				return todo;
			})
		);
	}

	function terminateUpdateTodo() {
		setEditingID("");
	}

	function completedTodo(id) {
		setTodos((todos) =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	}

	function handleClosePopup() {
		setAccountPopup(false);
		setAddTodoPopup(false);
	}

	function handleAccountPopup() {
		setAccountPopup(true);
	}
	function handleAddTodoPopup() {
		setAddTodoPopup(true);
	}

	return (
		<todosContext.Provider
			value={{
				todos,
				addTodo,
				deleteTodo,
				editTodo,
				editingID,
				terminateUpdateTodo,
				updateTodo,
				completedTodo,
				accountPopup,
				handleAccountPopup,
				handleClosePopup,
				toggleSidebar,
				setToggleSidebar,
				addTodoPopup,
				handleAddTodoPopup,
			}}
		>
			{children}
		</todosContext.Provider>
	);
}

function useTodos() {
	const context = useContext(todosContext);
	if (context === undefined)
		throw new Error("todos provider used at outside of it's scope");
	return context;
}
export { TodosProvider, useTodos };
