import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {SearchPage} from "../Search/SearchPage.tsx";
import bibbyMark2 from "../../../public/bibbyMark2.png"

function Nav(){
    return(
        <BrowserRouter>
            <nav>
            <Link to={"/"}> <img className={"bibby-mark"} src={bibbyMark2} alt={"bibby-mark"}/> </Link>
            <Link to="/" id={"bibby-logo"}>ibby</Link>
            <Link to={"/"}><p className={"tag-name"}><span style={{fontWeight:"500",color:"#002258"}}>Personal</span> Library Manager</p> </Link>
            <ul id={"nav-items"}>
                <li> <Link to="/search"> Search </Link></li>
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