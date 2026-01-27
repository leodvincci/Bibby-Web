import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/" id={"bibby-logo"}>Bibby</Link>
            <ul id={"nav-items"}>
                <Link to="/search"><li>Search</li></Link>
                <Link to="/books/new"><li>New Book</li></Link>
                <Link to="/bookcases/new"><li>New Bookcase</li></Link>
            </ul>
        </nav>





    )
}

export { Nav }