import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/accueil";
import Blog from "./pages/blog";
import PageError from "./pages/PageError";
import { Outlet } from "react-router-dom";
import MainNav from "./components/MainNav";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <PageError />,
        children: [
            {
                path: "/",
                element: <Accueil />
            },
            {
                path: "/blog",
                element: <Blog />
            },
        ],
    },
]);

function Root() {
    return (
        <>
            <header>
                <MainNav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
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
