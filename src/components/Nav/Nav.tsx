import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {RegistrationPage} from "../Registration/RegistrationPage.tsx";
import {SearchPage} from "../Search/SearchPage.tsx";
import bibbyMark2 from "../../../public/bibbyMark2.png"

function Nav(){
    return(
            <nav>
            <Link to="/" id={"bibby-logo"}>Bibby</Link>
            <ul id={"nav-items"}>
                <li> <Link to="/search"> Search </Link></li>
            <Link to={"/addNewBook"}> <li>Library Management</li> </Link>
                <li>Book Cart</li>
                <li>Booklists</li>
            </ul>
        </nav>





            )
}

export {Nav}