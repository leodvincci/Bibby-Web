import { Button } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { API_URL } from "../../config/api";

function Nav() {

	const navigate = useNavigate();
	  const { logout } = useAuth();
	function handleLogout() {
		fetch(`${API_URL}/logout`, {
			method: "POST",
			credentials: "include",
		})
		.then((response) => {
			if (response.ok) {
				console.log("Logout successful");
				logout(); // Update auth context
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
