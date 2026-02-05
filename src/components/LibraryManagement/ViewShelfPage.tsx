import { Button } from "@radix-ui/themes";
import { Nav } from "../Nav/Nav";
import { BookcaseCard } from "./Components//BookcaseCard";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ViewShelfPage(props: any) {
    const { bookcaseId } = useParams();


    let [bookshelves, setBookshelves] = useState<any[]>([]);

    function fetchBookshelves() {
        fetch(`http://localhost:8080/api/v1/shelves/options/${bookcaseId}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBookshelves(data);
            })
    }



    useEffect(() => {
        fetchBookshelves();
    }, []);

    return (
        <div >
            <Nav />
            <section className=" ml-175px mr-175">

                <div className="flex align-itms-ctr  p-20 mb-50">
                    <div>
                        <h1 className="blu">Bookshelves</h1>
                        <p>Pick a bookshelf to see what's on each shelf.</p>
                    </div>


                </div>


                <section className="flex fw p-20 gap-25" id="bookshelfcards-section">


          
                    {bookshelves.map((bookshelf) => (
                        <BookcaseCard
                            key = {bookshelf.shelfId}
                            location={bookshelf?.shelfLabel}
                            capacity={bookshelf?.bookCapacity}
                            zone={bookshelf?.bookcaseLabel.split(":")[0]}
                            identifier={bookshelf?.bookcaseLabel.split(":")[1]}
                            placed={bookshelf?.bookCount}
                        >

                        </BookcaseCard>
                    ))}



                </section>

            </section>

        </div>
    );
}

export { ViewBookshelvesPage };
