import {SearchContainer} from "./SearchContainer.tsx";
import {SearchResultContainer} from "./SearchResultContainer.tsx";
import * as React from "react";

function SearchPage(){
    // const searchResultCount:number = 4;
    const [searchResults, setSearchResults] = React.useState("");

    function fetchSearchResults(isbn:string){
        fetch(`http://localhost:8080/api/v1/books/search/${isbn}`)
            .then(response => response.json())
            .then(data => {
                console.log("Search results data:", data);
                setSearchResults(data);
            }
            )
            .catch(error => {
                console.error("Error fetching search results:", error);
            });
    }

    function searchResult(userSearchType:string, userSearchInput:string){
        console.log("Searching by: " + userSearchType);
        console.log("User searched for: " + userSearchInput);
        fetchSearchResults(userSearchInput);
    }
    return(
        <section className="search-page">
            <p className="page-title">Search the stacks</p>
            <p className={"page-subtitle"}>ISBN, title, author, publisher, or tags</p>

            <SearchContainer
            searchResult={searchResult}
            />
            <SearchResultContainer
            searchResults={searchResults}
            />

        </section>
        )
}

export {SearchPage}