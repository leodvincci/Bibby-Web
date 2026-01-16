import { Nav } from "../Nav/Nav"
import { Button } from "@radix-ui/themes"

function AddBookPage() {


    return(
        <div>
            <Nav/>
            <p className="add-book-cta" >Add a new book to your library</p>
            <Button color="cyan" variant="surface">Scan</Button>
            <Button color="cyan" variant="surface">Manual</Button>

            <form className="add-book-form" >
                <input type="text" />

                <input type="text" />

                <input type="text" />

                <input type="text" />

                <Button type="submit" color="cyan" variant="solid">Add to library</Button>
            </form>



            {/* Form elements for adding a new book would go here */}
        </div>
    )
}

export { AddBookPage }