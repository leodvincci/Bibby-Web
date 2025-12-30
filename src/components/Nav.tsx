

function Nav(){
    return(
        <nav>
            <p id={"bibby-logo"}>Bibby</p>
            <ul id={"nav-items"}>
                <li>Search</li>
                <li>Library Management</li>
                <li>Book Cart</li>
                <li>Booklists</li>
            </ul>

            <p id={"sign-in-btn"} className={"btn"}>Login</p>
        </nav>
    )
}



export {Nav}