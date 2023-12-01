/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const todosContext = createContext();

function TodosProvider({ children }) {
	const [todos, setTodos] = useState(function () {
		const storedTodos = localStorage.getItem("todos");
		return storedTodos ? JSON.parse(storedTodos) : [];
	});
	const [editingID, setEditingID] = useState("");
	const [todayTodos, setTodayTodos] = useState([]);
	const [upcomingTodos, setUpcomingTodos] = useState([]);
	const [personalTodos, setPersonalTodos] = useState([]);
	const [businessTodos, setBusinessTodos] = useState([]);
	const [familyTodos, setFamilyTodos] = useState([]);
	const [filterType, setFilterType] = useState("uncompleted");
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [sort, setSort] = useState(true);

	useEffect(
		function () {
			if (filterType === "all") setFilteredTodos(todos);
			if (filterType === "completed")
				setFilteredTodos(todos.filter((todo) => todo.completed));
			if (filterType === "uncompleted")
				setFilteredTodos(todos.filter((todo) => !todo.completed));
		},
		[filterType, todos]
	);
	useEffect(
		function () {
			setTodayTodos(
				filteredTodos.filter(
					(todo) =>
						new Date(todo.duedate) - new Date() < 86400000 &&
						new Date(todo.duedate) - new Date() > 0
				)
			);
		},
		[filteredTodos]
	);
	useEffect(
		function () {
			setUpcomingTodos(
				filteredTodos.filter(
					(todo) => new Date(todo.duedate) - new Date() > 86400000
				)
			);
		},
		[filteredTodos]
	);
	useEffect(
		function () {
			setPersonalTodos(
				filteredTodos.filter((todo) => todo.category === "personal")
			);
		},
		[filteredTodos]
	);
	useEffect(
		function () {
			setBusinessTodos(
				filteredTodos.filter((todo) => todo.category === "business")
			);
		},
		[filteredTodos]
	);
	useEffect(
		function () {
			setFamilyTodos(
				filteredTodos.filter((todo) => todo.category === "family")
			);
		},
		[filteredTodos]
	);
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
				todayTodos,
				upcomingTodos,
				personalTodos,
				businessTodos,
				familyTodos,
				filterType,
				setFilterType,
				filteredTodos,
				sort,
				setSort,
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
