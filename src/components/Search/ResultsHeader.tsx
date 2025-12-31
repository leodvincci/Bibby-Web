
function ResultsHeader(){
   const resultCount = 0; // This would be dynamically set based on actual search results

    return(
        <p className="results-title">Results ({resultCount})</p>
    )
}



export {ResultsHeader}