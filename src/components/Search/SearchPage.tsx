function SearchPage(){
    return(
        <section className="search-page">
            <p className="page-title">Book Search</p>
            <label htmlFor={"search-input"}  aria-label={"book search input"}> </label>
            <input id={"search-input"} type={"text"} placeholder={"e.g. 9780517542095"} />
        </section>
        )
}

export {SearchPage}