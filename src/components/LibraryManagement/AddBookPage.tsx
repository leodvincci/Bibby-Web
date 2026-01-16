import { Nav } from "../Nav/Nav"
import { Button } from "@radix-ui/themes"

function AddBookPage() {

    function addNewBook(formData: FormData) {
        const isbn = formData.get("isbn")
        const title = formData.get("title")
        const author = formData.get("author")
        const publisher = formData.get("publisher")
        console.log({ isbn, title, author, publisher })
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

                <label htmlFor="author">
                    author
                    <input name="author" type="text" placeholder="e.g. Douglas Adams" />
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