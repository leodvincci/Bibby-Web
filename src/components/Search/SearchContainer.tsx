function SearchContainer(){
    return(
        <div className={"search-container"}>


            <form action={()=>{console.log("Submitted Form")}}>

                <div>
                    <label htmlFor={"search-input"}  aria-label={"book search input"}></label>
                    <input id={"search-input"} type={"text"} placeholder={"e.g. 9780517542095"} />
                    <button  type={"submit"} className={"book-search-icon search-btn"} style={{ border: "none", background: "none", padding: 0,height:".05px",width:".05px", position:"static"}}> <img className={"book-search-icon"} src={"../../public/search_bookIcon.png"} alt={"book icon"}/> </button>

                </div>


                <label htmlFor={"isbn-radio"}>Search By ISBN</label>
                <input id="isbn-radio" type={"radio"} />

                <label htmlFor={"isbn-radio"}>Search By Title</label>
                <input id={"title-radio"} type={"radio"} />

                <label htmlFor={"isbn-radio"}>Search By Author</label>
                <input id={"author-radio"} type={"radio"} />
            </form>

        </div>

    )
}

export {SearchContainer}