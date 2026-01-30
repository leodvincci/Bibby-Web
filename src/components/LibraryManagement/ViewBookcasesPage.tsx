import { Button } from "@radix-ui/themes";
import { Nav } from "../Nav/Nav";
import { BookcaseCard } from "./Components//BookcaseCard";
import { Link } from "react-router";

function ViewBookcasesPage() {
    return (
        <div >
            <Nav />
            <section className=" ml-175px mr-175">

                <div className="flex align-itms-ctr  p-20 mb-50">
                    <div>
                        <h1 className="blu">Bookcases</h1>
                        <p>Pick a bookcase to see what's on each shelf.</p>
                    </div>

                    <div>
                        <Link to="/bookcases/new">
                            <Button style={{ marginLeft: "50px" }} color="cyan">+ New bookcase</Button>
                        </Link>

                    </div>

                </div>


                <section className="flex fw p-20 gap-25" id="bookcasecard-section">
                    <BookcaseCard />
                    <BookcaseCard />
                    <BookcaseCard />
                    <BookcaseCard />


                </section>

            </section>

        </div>
    );
}

export { ViewBookcasesPage };
