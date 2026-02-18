import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Nav, BookcaseCard } from "../../components";
import { API_URL } from "../../config/api";
import { Button } from "@radix-ui/themes";

function ViewShelfPage() {
	const { shelfId } = useParams();

	const [books, setBooks] = useState<any[]>([]);
	const location = useLocation();
	console.log("Location state in ViewShelfPage:", location.state);

	function fetchBooks() {
		fetch(`${API_URL}/api/v1/books/shelf/${shelfId}`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setBooks(data);
			});
	}

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<div>
			<Nav />
			<section className=" ml-175px mr-175">
				<div className="flex align-itms-ctr  p-20 mb-50">
					<div>
						<h1 className="blu"> {location.state?.bookshelfLocation} :: {location.state?.bookcaseZone} {location.state?.bookcaseIndex} :: Shelf {shelfId}</h1>
						<p>Pick a book from the shelf.</p>
					</div>

					<div>
						<Link to="/books/new"
							state={{ bookshelfLocation: location.state?.bookshelfLocation, shelfLabel: location.state?.shelfLabel, shelfId: shelfId, bookcaseLabel: location.state?.bookcaseLabel }}>
							<Button style={{ marginLeft: "50px" }} color="cyan">
								+ Add book to shelf
							</Button>
						</Link>
					</div>
				</div>

				<section className="flex fw p-20 gap-25" id="bookshelfcards-section">
					{books.map((book) => (
						<Link to={`/books/view/${book.isbn} `} key={book.isbn}>
							<BookcaseCard
								key={book.isbn}
								location={book?.title}
								zone={book?.authors}
								identifier={book?.isbn}
							></BookcaseCard>
						</Link>
					))}
				</section>
			</section>
		</div>
	);
}

export { ViewShelfPage };
