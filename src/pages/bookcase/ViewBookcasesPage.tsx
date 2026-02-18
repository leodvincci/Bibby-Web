import { Button } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Nav, BookcaseCard } from "../../components";
import { API_URL } from "../../config/api";

function ViewBookcasesPage() {
	const [bookcases, setBookcases] = useState<any[]>([]);

	function fetchBookcases() {
		fetch(`${API_URL}/api/v1/bookcase/all`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Fetched bookcases:", data);
				setBookcases(data);
			});
	}

	useEffect(() => {
		fetchBookcases();
	}, []);

	return (
		<div>
			<Nav />
			<section className=" ml-175px mr-175">
				<div className="flex align-itms-ctr  p-20 mb-50">
					<div>
						<h1 className="blu">Bookcases</h1>
						<p>Pick a bookcase to see what's on each shelf.</p>
					</div>

					<div>
						<Link to="/bookcases/new">
							<Button style={{ marginLeft: "50px" }} color="cyan">
								+ New bookcase
							</Button>
						</Link>
					</div>
				</div>

				<section className="flex fw p-20 gap-25" id="bookcasecard-section">
					{bookcases.map((bookcase) => (
						<Link
							to={`/bookshelves/view/${bookcase.bookcaseId}`}
							key={bookcase.bookcaseId}
							state={{ bookcaseLocation: bookcase?.location, index: bookcase?.index, bookcaseZone: bookcase?.zone, bookcaseIndex: bookcase?.index}}
						>
							<BookcaseCard
								key={bookcase.bookcaseId}
								bookcaseId={bookcase.bookcaseId}
								location={bookcase?.location}
								zone={bookcase?.zone}
								identifier={bookcase?.index}
								capacity={bookcase?.bookCapacity}
							></BookcaseCard>
						</Link>
					))}
				</section>
			</section>
		</div>
	);
}

export { ViewBookcasesPage };
