import { Nav } from "../Nav/Nav";
import { Button } from "@radix-ui/themes";
import { BookcaseCard } from "./Components//BookcaseCard";

function ViewBookcasesPage() {
    return (
        <div>
            <Nav />
            <h1 className="blu">Bookcases</h1>
            <p>Pick a bookcase to see what's on each shelf.</p>
            <Button color="cyan">+ New bookcase</Button>

            <section className="flex" id="bookcasecard-section">
                <BookcaseCard />
                <BookcaseCard />
                <BookcaseCard />
            </section>

        </div>
    );
}

export { ViewBookcasesPage };