import {SearchContainer} from "./SearchContainer.tsx";
import {SearchResultContainer} from "./SearchResultContainer.tsx";

function SearchPage(){
    const searchResultcount:number = 0;

    return(
        <section className="search-page">
            <p className="page-title">Book Search</p>
            <SearchContainer/>
            <SearchResultContainer
                resultCount={searchResultcount}
            />

        </section>
        )
}

export {SearchPage}