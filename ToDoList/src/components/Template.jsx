import "./Template.css";

function Template({ children }) {
    return (
        <>
            <header>
                <nav>
                    <img src="https://picsum.photos/200" width={100} alt="" />
                    <ul className="list">
                        <li>
                            <a href="#">Accueil</a>
                        </li>
                        <li>
                            <a href="#">To Do list</a>
                        </li>
                    </ul>
                </nav>
                <h1>To Do list</h1>
            </header>

            <main>{children}</main>

            <footer>
                <img src="https://picsum.photos/200" width={100} alt="" />
                <ul className="list">
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Template;
