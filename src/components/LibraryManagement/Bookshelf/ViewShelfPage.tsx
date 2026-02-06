import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Nav } from "../../Nav/Nav";
import { BookcaseCard } from "../Components/BookcaseCard";

function ViewShelfPage() {
	const { shelfId } = useParams();

	const [books, setBooks] = useState<any[]>([]);

	function fetchBooks() {
		fetch(`http://localhost:8080/api/v1/books/shelf/${shelfId}`, {
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
						<h1 className="blu">Shelf</h1>
						<p>Pick a book from the shelf.</p>
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
