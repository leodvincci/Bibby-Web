import { SearchResults } from "./SearchResults.tsx";

function SearchResultContainer(props: any) {
	const hidden = "";
	if (props.searchResultCount === -42) {
		return;
	}

	return (
		<div className={"search-result-container"}>
			<p className={`results-title ${hidden}`}>
				Results ({props.searchResultCount})
			</p>
			<hr />
			<SearchResults searchResults={props.searchResults} />
		</div>
	);
}

export { SearchResultContainer };
