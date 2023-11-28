import styles from "./aPPlAYOUT.module.css";

import TodoForm from "../components/TodoForm";
import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className={styles.application}>
      <div className={styles.fixed__top}>
        <AppNav />
        <TodoForm />
      </div>
      <div className={styles.sidebar__container}>
        <Sidebar />
      </div>
      <div className={styles.todo__list__container}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
