import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {SearchPage} from "./SearchPage.tsx";

function Nav(){
    return(
        <BrowserRouter>

        <nav>
            <Link to="/" id={"bibby-logo"}>Bibby</Link>
            <ul id={"nav-items"}>
                <Link to="/search"> Search </Link>
                <li>Library Management</li>
                <li>Book Cart</li>
                <li>Booklists</li>
            </ul>

            <p id={"sign-in-btn"} className={"btn"}>Login</p>
        </nav>



            <Routes>
                <Route path="/search" element={<SearchPage />} />
            </Routes>
            </BrowserRouter>

            )
}



export {Nav}