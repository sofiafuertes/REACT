import { Outlet, NavLink } from "react-router-dom";

function Portfolio() {
    return (
        <>
            <nav>
                <NavLink to={"/portfolio/carduser"}> CardUser </NavLink>
                <NavLink to={"/portfolio/calendar"}> Calendar </NavLink>
                <NavLink to={"/portfolio/todolist"}> ToDoList </NavLink>
            </nav>
            <h1>Portfolio</h1>
            <Outlet />
        </>
    );
}

export default Portfolio;
