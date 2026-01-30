import { Button } from "@radix-ui/themes";
import { Nav } from "../Nav/Nav";
import { BookcaseCard } from "./Components//BookcaseCard";
import { Link } from "react-router";
import { useEffect, useState } from "react";

function ViewBookcasesPage() {

    let [bookcases, setBookcases] = useState<any[]>([]);

    function fetchBookcases() {
        fetch("http://localhost:8080/api/v1/bookcase/all", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBookcases(data);
            })
    }



    useEffect(() => {
        fetchBookcases();
    }, []);

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


          
                    {bookcases.map((bookcase) => (
                        <BookcaseCard
                            key = {bookcase.bookcaseId}
                            location={bookcase?.location}
                            zone={bookcase?.bookcaseLabel.split(":")[0]}
                            identifier={bookcase?.bookcaseLabel.split(":")[1]}
                            capacity={bookcase?.bookCapacity}
                        >

                        </BookcaseCard>
                    ))}



                </section>

            </section>

        </div>
    );
}

export { ViewBookcasesPage };
