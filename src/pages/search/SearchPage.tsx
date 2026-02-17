import * as React from "react";
import { Nav } from "../../components";
import { SearchContainer } from "./SearchContainer.tsx";
import { SearchResultContainer } from "./SearchResultContainer.tsx";
import { API_URL } from "../../config/api";

function SearchPage() {
  // const searchResultCount:number = 4;
  const [searchResults, setSearchResults] = React.useState("");
  const [searchResultCount, setSearchResultCount] = React.useState<number>(-42); // -42: no search performed yet | 0: no results found | ≥1: number of results found
  const [locationData, setLocationData] = React.useState([]);
  const [bookId, setBookId] = React.useState<number>(-1);

  function fetchLocationData(bookId: number) {
    fetch(`${API_URL}/api/v1/books/booklocation?bookId=${bookId}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Book location data:", data);
        setLocationData(data);
      })
      .catch((error) => {
        console.error("Error fetching book location data:", error);
      });
  }

  function fetchSearchResults(isbn: string) {
    fetch(`${API_URL}/api/v1/books/search/${isbn}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Search results data:", data);
        console.log(`data length:${data.length}`);
        if (data.status === 404) {
          console.log("No results found for the given ISBN.");
          setSearchResults("No results found.");
          setSearchResultCount(0);
          return;
        }
        setSearchResults(data);
        console.log(`Book ID from search results: ${data.id}`);
        setBookId(data.id); // Assuming the first result is the most relevant one
        setSearchResultCount(1);
        fetchLocationData(data.id);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }

  function searchResult(userSearchType: string, userSearchInput: string) {
    console.log(`Searching by: ${userSearchType}`);
    console.log(`User searched for: ${userSearchInput}`);
    fetchSearchResults(userSearchInput);
  }
  return (
    <div>
      <Nav />

      <section className="search-page">
        <p className="page-title">
          Search the
          <span id={"span-title"}> stacks</span>
          <img
            className={
              "animate__animated animate__bounce animate__delay-1s animate__repeat-2"
            }
            id="book-stack-icon"
            src={"/bookStack2.png"}
          />
        </p>
        <p className={"page-subtitle"}>
          ISBN, title, author, publisher, or tags
        </p>

        <SearchContainer searchResult={searchResult} />
        <SearchResultContainer
          searchResults={searchResults}
          searchResultCount={searchResultCount}
          locationData={locationData}
          bookId={bookId}
        />
      </section>
    </div>
  );
}

export { SearchPage };
