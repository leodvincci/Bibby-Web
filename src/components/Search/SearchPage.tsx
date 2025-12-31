import {SearchContainer} from "./SearchContainer.tsx";
import {ResultsHeader} from "./ResultsHeader.tsx";

function SearchPage(){
    return(
        <section className="search-page">
            <p className="page-title">Book Search</p>
            <SearchContainer/>
            <ResultsHeader/>
        </section>
        )
}

export {SearchPage}