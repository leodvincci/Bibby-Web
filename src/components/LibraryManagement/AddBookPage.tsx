import { Nav } from "../Nav/Nav"
import { Button } from "@radix-ui/themes"

function AddBookPage() {

    async function addNewBook(formData: FormData) {
        const isbn = formData.get("isbn")
        const title = formData.get("title")
        const authors = formData.get("authors")
        const publisher = formData.get("publisher")

        try {
            const response = await fetch("http://localhost:8080/api/v1/books/addnewbook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    isbn,
                    title,
                    authors: typeof authors === "string"
                        ? authors.split(",").map(a => a.trim()).filter(Boolean)
                        : [],
                    publisher
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

            <form action={addNewBook} className="add-book-form" >

                <label htmlFor="isbn">
                    isbn
                    <input name="isbn" type="text" placeholder="e.g. 9780517542095" />
                </label>

                <label htmlFor="title">
                    title
                    <input name="title" type="text" placeholder="e.g. The Hitchhiker's Guide to the Galaxy" />
                </label>

                <label htmlFor="authors">
                    author
                    <input name="authors" type="text" placeholder="e.g. Douglas Adams" />
                </label>

                <label htmlFor="publisher">
                    publisher
                    <input name="publisher" type="text" placeholder="e.g. Pan Books" />
                </label>


                <Button type="submit" color="cyan" variant="solid">Add to library</Button>
            </form>



            {/* Form elements for adding a new book would go here */}
        </div>
    )
}

export { AddBookPage }