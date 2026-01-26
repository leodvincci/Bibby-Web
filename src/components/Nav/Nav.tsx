import { Link } from "react-router-dom";

function Nav(){
    return(
            <nav>
            <Link to="/" id={"bibby-logo"}>Bibby</Link>
            <ul id={"nav-items"}>
                <li> <Link to="/search"> Search </Link></li>
            <Link to={"/addNewBook"}> <li>Add Book</li> </Link>
                <li>Book Cart</li>
            </ul>
        </nav>





            )
}

export {Nav}