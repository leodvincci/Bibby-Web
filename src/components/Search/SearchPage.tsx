import { Nav } from "../Nav/Nav.tsx";
import { SearchContainer } from "./SearchContainer.tsx";
import { SearchResultContainer } from "./SearchResultContainer.tsx";
import * as React from "react";

function SearchPage() {
    // const searchResultCount:number = 4;
    const [searchResults, setSearchResults] = React.useState("");
    const [searchResultCount, setSearchResultCount] = React.useState<number>(-42); // -42: no search performed yet | 0: no results found | ≥1: number of results found

    function fetchSearchResults(isbn: string) {
        fetch(`http://localhost:8080/api/v1/books/search/${isbn}`,{
            method: "GET",
            credentials: "include",
        })
            .then(response => response.json())
            .then(data => {
                console.log("Search results data:", data);
                console.log("data length:" + data.length)
                if (data.status === 404) {
                    console.log("No results found for the given ISBN.");
                    setSearchResults("No results found.");
                    setSearchResultCount(0)
                    return;
                }
                setSearchResults(data);
                setSearchResultCount(1)
            }
            )
            .catch(error => {
                console.error("Error fetching search results:", error);
            });
    }

    function searchResult(userSearchType: string, userSearchInput: string) {
        console.log("Searching by: " + userSearchType);
        console.log("User searched for: " + userSearchInput);
        fetchSearchResults(userSearchInput);
    }
    return (
        <div>
            <Nav />

            <section className="search-page">

                <p className="page-title">Search the
                    <span id={"span-title"}> stacks</span>
                    <img className={"animate__animated animate__bounce animate__delay-1s animate__repeat-2"} id="book-stack-icon" src={"public/bookStack2.png"} /></p>
                <p className={"page-subtitle"}>ISBN, title, author, publisher, or tags</p>

                <SearchContainer
                    searchResult={searchResult}

                />
                <SearchResultContainer
                    searchResults={searchResults}
                    searchResultCount={searchResultCount}
                />

            </section>
        </div>
    )
}

export { SearchPage }