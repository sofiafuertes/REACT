function Template({ children }) {
    return (
        <>
            <header>
                <h2>To Do list</h2>
            </header>
            <main>{children}</main>
        </>
    );
}

export default Template;
