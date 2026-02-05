import { Button } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";

function Nav() {

	const navigate = useNavigate();
	function handleLogout() {
		fetch("http://localhost:8080/logout", {
			method: "POST",
			credentials: "include",
		})
		.then((response) => {
			if (response.ok) {
				console.log("Logout successful");
				// redirect or update state
				navigate("/login");
			} else {
				console.log("Logout failed:", response.status);
			}
		})
		.catch((error) => console.error("Error:", error));
	}

	return (
		<nav>
			<Link to="/login" id={"bibby-logo"}>
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

				<Button style={{ marginLeft: "900px" }} onClick={handleLogout}>Logout</Button>
			</ul>
		</nav>
	);
}

export { Nav };
