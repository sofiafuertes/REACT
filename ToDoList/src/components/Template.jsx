import "./Template.css";

function Template({ children }) {
    return (
        <>
            <header>
                <nav>
                    <img src="https://picsum.photos/200" width={100} alt="" />
                    <ul className="list">
                        <h1 className="header">Header</h1>
                    </ul>
                </nav>
                <h1>To Do list</h1>
            </header>

            <main>{children}</main>

            <footer>
                <img src="https://picsum.photos/200" width={100} alt="" />
                <ul className="list">
                    <h4>Footer</h4>
                </ul>
            </footer>
        </>
    );
}

export default Template;
