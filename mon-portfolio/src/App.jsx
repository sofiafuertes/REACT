import "./App.css";
import {createBrowserRouter,NavLink,Outlet,RouterProvider} from "react-router-dom";
import Accueil from "./pages/Accueil";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import CardUser from "./pages/CardUser";
import Calendar from "./pages/Calendar";
import ToDoList from "./pages/ToDoList";
import PageError from "./pages/PageError";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <PageError />,
        children: [
            {
                path: "/",
                element: <Accueil />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
                children: [
                    {
                        path: "/portfolio/carduser",
                        element: <CardUser />,
                    },
                    {
                        path: "/portfolio/calendar",
                        element: <Calendar />,
                    },
                    {
                        path: "/portfolio/todolist",
                        element: <ToDoList />,
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

function Root() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to={"/"}> Accueil </NavLink>
                    <NavLink to={"/portfolio"}> Portfolio </NavLink>
                    <NavLink to={"/contact"}> Contact </NavLink>
                </nav>
                <h1>Mon Portfolio</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer> </footer>
        </>
    );
}

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
