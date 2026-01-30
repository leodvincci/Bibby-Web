import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link to="/" id={"bibby-logo"}>
				Bibby
			</Link>
			<ul id={"nav-items"}>
				<Link to="/search">
					<li>Search</li>
				</Link>


				<Link to="/bookcases/view">
					<li>Bookcases</li>
				</Link>
				
				<Link to="/books/new">
					<li>New Book</li>
				</Link>


				<Button style={{ marginLeft: "900px" }}>Logout</Button>
			</ul>
		</nav>
	);
}

export { Nav };
