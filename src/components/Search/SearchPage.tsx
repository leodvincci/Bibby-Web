function SearchPage(){
    return(
        <section className="search-page">
            <p className="page-title">Book Search</p>
            <label htmlFor={"search-input"}  aria-label={"book search input"}> </label>
            <div className={"search-container"}>
                <input id={"search-input"} type={"text"} placeholder={"e.g. 9780517542095"} />
                <img id={"book-search-icon"} src={"../../public/search_bookIcon.png"} alt={"book icon"}/>
            </div>
        </section>
        )
}

export {SearchPage}