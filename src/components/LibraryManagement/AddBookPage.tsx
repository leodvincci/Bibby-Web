import { Nav } from "../Nav/Nav"
import { Button } from "@radix-ui/themes"
import { useRef } from "react"

function AddBookPage() {

    const titleRef = useRef<HTMLInputElement>(null);
    const authorsRef = useRef<HTMLInputElement>(null);

    function fetchMetadata() {

        console.log("fetching metadata..." + ref.current?.value)
        fetch("http://localhost:8080/api/v1/books/fetchbookmetadata", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isbn: ref.current?.value,
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText)
                }
                return response.json()
            })
            .then(data => {
                console.log("Fetched metadata:", data)
                // Here you would typically update the form fields with the fetched data
                titleRef.current!.value = data.title || ""
                authorsRef.current!.value = (data.authors || []).join(", ")
            })
            .catch(error => {
                console.error("Error fetching metadata:", error)
            })
    }

    const ref = useRef<HTMLInputElement>(null);

    async function addNewBook(formData: FormData) {
        const isbn = formData.get("isbn")
        const title = formData.get("title")
        const authors = formData.get("authors")

        try {

            const response = await fetch("http://localhost:8080/api/v1/books/addnewbook", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    isbn,
                    title,
                    authors: typeof authors === "string"
                        ? authors.split(",").map(a => a.trim()).filter(Boolean)
                        : [],
                })
            })

            if (!response.ok) {
                console.error("Failed to add book:", response.statusText)
                return
            }

            const data = await response.json()
            console.log('Success:', data)
        } catch (error: any) {
            console.error('Error:', error)
        }
    }


    return (
        <div>
            <Nav />



            <form action={addNewBook} className="  add-book-form w-65 align-center mt-120 " >
                <section className="flex ">
                    <p className="blu fw-400 ml-60 mr-138" >Add a new book to your library</p>
                    {/*Scan Feature not implemented yet <Button style={{width: "100px", marginRight: "5px", borderRadius: "7px"}} color="cyan" variant="surface">Scan</Button> */}
                    {/* <Button style={{width: "100px", borderRadius: "7px"}} color="cyan" variant="surface">Manual</Button> */}
                </section>


                <div id="isbn-container" className="justify-space flex-row" >
                    <label className="color-blu txt-12" htmlFor="isbn">
                        ISBN
                        <input ref={ref} required className="ml-30 minw-565 w-80 add-book-input-border placeholder-color-blu" name="isbn" type="text" placeholder="e.g. 9780517542095" />
                    </label>
                    <Button onClick={fetchMetadata} size="3" style={{ fontSize: "14px", color: "rgb(111, 138, 149)" }} className="bth-30" type="button" color="cyan" variant="soft">Auto-fill from ISBN</Button>

                </div>
                <p className="txt-smallest ml-60 w-25">Enter the ISBN to fetch book details</p>

                <label htmlFor="title">
                    Title
                    <input ref={titleRef} required className="ml-30 w-100" name="title" type="text" placeholder="e.g. The Hitchhiker's Guide to the Galaxy" />
                </label>


                <label htmlFor="authors">
                    Author
                    <input ref={authorsRef} required className="ml-10 mw-80 minw-20" name="authors" type="text" placeholder="e.g. Douglas Adams" />
                </label>

                <div className="location-selection">
                    <div>


                        <label className="blu txt-13 mr-10 fw-300" htmlFor="Bookcase">
                            Bookcase
                        </label>
                        <select name="bookcases" className="mr-125 w-600 h-40 br-60 bg-grey-light">
                            <option value={""}> Select a bookcase</option>
                            <option value={"basement_windowside"}> Basement WindowSide</option>
                            <option value={"office_main"}> Office Main</option>
                            <option value={"bedroom_corner"}> Bedroom Corner</option>
                        </select>
                    </div>


                    <div>

                        <label className="blu mr-10 txt-13 fw-300 " htmlFor="Bookshelf">
                            Bookshelf
                        </label>

                        <select name="bookshelves" className="w-600 h-40 br-60 bg-grey-light">
                            <option value={""}>Select a bookshelf</option>
                            <option value={"shelf_1"}>Shelf 1</option>
                            <option value={"shelf_2"}>Shelf 2</option>
                            <option value={"shelf_3"}>Shelf 3</option>
                            <option value={"shelf_4"}>Shelf 4</option>
                            <option value={"shelf_5"}>Shelf 5</option>
                        </select>

                    </div>

                </div>

                <Button style={{ width: "840px" }} className="add-to-lib-btn" type="submit" size="2" color="cyan" variant="solid">Add to library</Button>


            </form>



            {/* Form elements for adding a new book would go here */}
        </div>
    )
}

export { AddBookPage }