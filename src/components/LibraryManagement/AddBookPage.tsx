import { Nav } from "../Nav/Nav"
import { Button } from "@radix-ui/themes"

function AddBookPage() {

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
            <p className="add-book-cta" >Add a new book to your library</p>
            <Button color="cyan" variant="surface">Scan</Button>
            <Button color="cyan" variant="surface">Manual</Button>

            <form action={addNewBook} className="add-book-form w-65 align-center" >
                
                <div id="isbn-container" className="justify-center flex-row" >
                    <label className="color-blu" htmlFor="isbn">
                        isbn
                        <input className="ml-30 add-book-input-border placeholder-color-blu" name="isbn" type="text" placeholder="e.g. 9780517542095" />
                    </label>
                    <Button size="3" className="bth-30" type="submit" color="cyan" variant="solid">Auto-fill from ISBN</Button>

                </div>

                <label htmlFor="title">
                    title
                    <input className="ml-30 w-100" name="title" type="text" placeholder="e.g. The Hitchhiker's Guide to the Galaxy" />
                </label>

                <label htmlFor="authors">
                    author
                    <input className="ml-10 w-100" name="authors" type="text" placeholder="e.g. Douglas Adams" />
                </label>
                <Button className="btw-50" type="submit" color="cyan" variant="solid">Add to library</Button>
            </form>



            {/* Form elements for adding a new book would go here */}
        </div>
    )
}

export { AddBookPage }