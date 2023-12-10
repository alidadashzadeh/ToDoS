import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Pagenotfound from "./pages/Pagenotfound";
import SignInForm from "./components/SignInForm";
import Inbox from "./components/Inbox";
import SignUpForm from "./components/SignUpForm";
import AppLayout from "./pages/AppLayout";
import { TodosProvider } from "./contexts/TodosContext";

function App() {
	return (
		<TodosProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Homepage />} />
					<Route path="/app" element={<AppLayout />}>
						<Route index element={<Navigate replace to="inbox" />} />
						<Route path="inbox" element={<Inbox />} />
						<Route path="today" element={<Inbox />} />
						<Route path="upcoming" element={<Inbox />} />
					</Route>
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />}>
						<Route index element={<Navigate replace to="signin" />} />
						<Route path="signin" element={<SignInForm />} />
						<Route path="signup" element={<SignUpForm />} />
					</Route>
					<Route path="*" element={<Pagenotfound />} />
				</Routes>
			</BrowserRouter>
		</TodosProvider>
	);
}

export default App;
