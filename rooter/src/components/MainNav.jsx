import { Link, NavLink } from "react-router-dom";

function MainNav() {
    return (
        <nav>
            <Link to={"/"}>Accueil</Link>
            <NavLink to={"/blog"}>Blog</NavLink>
        </nav>
    );
}

export default MainNav;
