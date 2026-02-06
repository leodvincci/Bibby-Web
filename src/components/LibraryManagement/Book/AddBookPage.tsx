import { Button } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";
import { Nav } from "../../Nav/Nav";

function AddBookPage() {
	const titleRef = useRef<HTMLInputElement>(null);
	const authorsRef = useRef<HTMLInputElement>(null);
	const locationRef = useRef<HTMLSelectElement>(null);
	const [bookcases, setBookcases] = useState([]);
	const [locations, setLocations] = useState([]);
	const [bookshelves, setBookshelves] = useState([]);

	var caseOptions = bookcases.map((bookcase: any) => (
		<option key={bookcase.bookcaseId} value={bookcase.bookcaseId}>
			{bookcase.bookcaseLabel}
		</option>
	));

	var locationOptions = locations.map((location: any, index: number) => (
		<option key={index} value={location}>
			{location}
		</option>
	));

	var shelfOptions = bookshelves.map((shelf: any) => (
		<option key={shelf.shelfId} value={shelf.shelfId}>
			{shelf.shelfLabel}
		</option>
	));

	function fetchBookShelves(bookcaseId: string) {
		fetch(`https://bibby-app-production.up.railway.app/api/v1/shelves/options/${bookcaseId}`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Network response was not ok ${response.statusText}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log("Bookcase ID set to:", bookcaseId);
				console.log("Fetched bookshelves:", data);
				// update the bookshelf selection options with the fetched data
				setBookshelves(data);
				console.log("Bookshelves set to:", data);
			})
			.catch((error) => {
				console.error("Error fetching bookshelves:", error);
			});
	}

	function fetchBookcaseLocations() {
		fetch("https://bibby-app-production.up.railway.app/api/v1/bookcase/locations", {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Network response was not ok ${response.statusText}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log("Fetched locations:", data);
				// update the location selection options with the fetched data
				setLocations(data);
			})
			.catch((error) => {
				console.error("Error fetching locations:", error);
			});
	}

	function fetchMetadata() {
		console.log(`fetching metadata...${ref.current?.value}`);
		fetch("http://localhost:8080/api/v1/books/fetchbookmetadata", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				isbn: ref.current?.value,
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Network response was not ok ${response.statusText}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log("Fetched metadata:", data);
				// update the form fields with the fetched data
				titleRef.current!.value = data.title || "";
				authorsRef.current!.value = (data.authors || []).join(", ");
			})
			.catch((error) => {
				console.error("Error fetching metadata:", error);
			});
	}

	function fetchBookcases(location?: string) {
		fetch(`https://bibby-app-production.up.railway.app/api/v1/bookcase/location/${location}`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Network response was not ok ${response.statusText}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log("Fetched bookcases:", data);
				// update the bookcase selection options with the fetched data
				setBookcases(data);
				console.log("Bookcases set to:", data);
			})
			.catch((error) => {
				console.error("Error fetching bookcases:", error);
			});
	}

	useEffect(() => {
		fetchBookcaseLocations();
	}, []);

	const ref = useRef<HTMLInputElement>(null);

	async function addNewBook(formData: FormData) {
		const isbn = formData.get("isbn");
		const title = formData.get("title");
		const authors = formData.get("authors");
		const shelfId = formData.get("bookshelves");
		try {
			const response = await fetch(
				"https://bibby-app-production.up.railway.app/api/v1/books/addnewbook",
				{
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						isbn,
						shelfId,
						title,
						authors:
							typeof authors === "string"
								? authors
										.split(",")
										.map((a) => a.trim())
										.filter(Boolean)
								: [],
					}),
				},
			);

			if (!response.ok) {
				console.error("Failed to add book:", response.statusText);
				return;
			}

			const data = await response.json();
			console.log("Success:", data);
		} catch (error: any) {
			console.error("Error:", error);
		}
	}

	return (
		<div>
			<Nav />

			<form
				action={addNewBook}
				className="  add-book-form w-65 align-center mt-120 "
			>
				<section className="flex ">
					<h1 className="blu  ml-60 mr-138 mb-10">
						Add a new book to your library
					</h1>
					{/*Scan Feature not implemented yet <Button style={{width: "100px", marginRight: "5px", borderRadius: "7px"}} color="cyan" variant="surface">Scan</Button> */}
					{/* <Button style={{width: "100px", borderRadius: "7px"}} color="cyan" variant="surface">Manual</Button> */}
				</section>

				<div id="isbn-container" className="justify-space flex-row">
					<label className="color-blu txt-12" htmlFor="isbn">
						ISBN
						<input
							ref={ref}
							required
							className="ml-30 minw-565 w-80 add-book-input-border placeholder-color-blu"
							name="isbn"
							type="text"
							placeholder="e.g. 9780517542095"
						/>
					</label>
					<Button
						onClick={fetchMetadata}
						size="3"
						style={{ fontSize: "14px", color: "rgb(111, 138, 149)" }}
						className="bth-30"
						type="button"
						color="cyan"
						variant="soft"
					>
						Auto-fill from ISBN
					</Button>
				</div>
				<p className="txt-smallest ml-60 w-25">
					Enter the ISBN to fetch book details
				</p>

				<label htmlFor="title">
					Title
					<input
						ref={titleRef}
						required
						className="ml-30 w-100"
						name="title"
						type="text"
						placeholder="e.g. The Hitchhiker's Guide to the Galaxy"
					/>
				</label>

				<label htmlFor="authors">
					Author
					<input
						ref={authorsRef}
						required
						className="ml-10 mw-80 minw-20"
						name="authors"
						type="text"
						placeholder="e.g. Douglas Adams"
					/>
				</label>

				<div className="location-selection">
					<div>
						<label className="blu txt-13 mr-10 fw-300" htmlFor="Location">
							Location
						</label>
						<select
							onChange={() => fetchBookcases(locationRef.current?.value)}
							ref={locationRef}
							name="locations"
							className="w-600 h-40 br-60 bg-grey-light"
						>
							<option value={""}> Select a location</option>
							{locationOptions}
						</select>
					</div>

					<div>
						<label className="blu mr-10 txt-13 fw-300 " htmlFor="Bookcase">
							Bookcase
						</label>

						<select
							onChange={(e) => {
								fetchBookShelves(e.target.value);
							}}
							name="bookcases"
							className="w-600 h-40 br-60 bg-grey-light"
						>
							<option value={""}>Select a bookcase</option>
							{caseOptions}
						</select>
					</div>

					<div>
						<label className="blu mr-10 txt-13 fw-300 " htmlFor="Bookshelf">
							Shelf
						</label>

						<select
							onChange={(e) => {
								console.log(e.target.value);
							}}
							name="bookshelves"
							className="w-600 h-40 br-60 bg-grey-light"
						>
							<option value={""}>Select a shelf</option>
							{shelfOptions}
						</select>
					</div>
				</div>

				<Button
					style={{ width: "840px" }}
					className="add-to-lib-btn"
					type="submit"
					size="2"
					color="cyan"
					variant="solid"
				>
					Add to library
				</Button>
			</form>

			{/* Form elements for adding a new book would go here */}
		</div>
	);
}

export { AddBookPage };
