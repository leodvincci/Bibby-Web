import {SearchResults} from "./SearchResults.tsx";

function SearchResultContainer(props:any){
    // const resultCount = 0; // This would be dynamically set based on actual search results

    return(
        <div className={"search-result-container"}>
            <p className="results-title">Results ({props.resultCount})</p>
            <hr/>
            <SearchResults/>

        </div>
    )
}


export {SearchResultContainer}