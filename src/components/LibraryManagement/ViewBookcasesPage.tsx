import { Button } from "@radix-ui/themes";
import { Nav } from "../Nav/Nav";
import { BookcaseCard } from "./Components//BookcaseCard";

function ViewBookcasesPage() {
    return (
        <div>
            <Nav />
            <section className="">

                <div className="flex">
                    <div>
                        <h1 className="blu">Bookcases</h1>
                        <p>Pick a bookcase to see what's on each shelf.</p>
                    </div>

                    <div>
                        <Button color="cyan">+ New bookcase</Button>

                    </div>

                </div>


                <section className="flex gap-25" id="bookcasecard-section">
                    <BookcaseCard />
                    {/* <BookcaseCard />
                    <BookcaseCard />
                    <BookcaseCard /> */}


                </section>

            </section>

        </div>
    );
}

export { ViewBookcasesPage };
