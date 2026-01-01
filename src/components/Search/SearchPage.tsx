import {SearchContainer} from "./SearchContainer.tsx";
import {SearchResultContainer} from "./SearchResultContainer.tsx";

function SearchPage(){
    const searchResultCount:number = 4;

    return(
        <section className="search-page">
            <p className="page-title">Search the stacks</p>
            <p className={"page-subtitle"}>ISBN, title, or author</p>

            <SearchContainer/>
            <SearchResultContainer
                resultCount={searchResultCount}
            />

        </section>
        )
}

export {SearchPage}