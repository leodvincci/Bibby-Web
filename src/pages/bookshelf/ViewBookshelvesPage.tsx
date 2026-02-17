import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Nav, BookcaseCard } from "../../components";
import { API_URL } from "../../config/api";

function ViewBookshelvesPage() {
	const { bookcaseId } = useParams();

	const [bookshelves, setBookshelves] = useState<any[]>([]);
	const location = useLocation();


	function fetchBookshelves() {
		fetch(`${API_URL}/api/v1/shelves/options/${bookcaseId}`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setBookshelves(data);
			});
	}

	useEffect(() => {
		fetchBookshelves();
	}, []);

	return (
		<div>
			<Nav />
			<section className=" ml-175px mr-175">
				<div className="flex align-itms-ctr  p-20 mb-50">
					<div>
						<h1 className="blu">{location.state?.bookcaseLocation} :: {location.state?.bookcaseLabel} :: Bookshelves</h1>
						<p>Pick a bookshelf to see what's on each shelf.</p>
					</div>
				</div>

				<section className="flex fw p-20 gap-25" id="bookshelfcards-section">
					{bookshelves.map((bookshelf) => (
						<Link
							to={`/bookshelves/view/shelf/${bookshelf.shelfId}`}
							key={bookshelf.shelfId}
							state={{ bookshelfLocation: location.state.bookcaseLocation, shelfLabel: bookshelf.shelfLabel, bookcaseLabel: bookshelf.bookcaseLabel }}
						>
							<BookcaseCard
								key={bookshelf.shelfId}
								location={bookshelf?.shelfLabel}
								capacity={bookshelf?.bookCapacity}
								zone={bookshelf?.bookcaseLabel.split(":")[0]}
								identifier={bookshelf?.bookcaseLabel.split(":")[1]}
								placed={bookshelf?.bookCount}
							></BookcaseCard>
						</Link>
					))}
				</section>
			</section>
		</div>
	);
}

export { ViewBookshelvesPage };
