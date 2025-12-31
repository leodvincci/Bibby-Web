
function SearchContainer(){




    function userSearchSelection(formData:any){
        const userSearchSelection = formData.get("search-by")
        console.log(userSearchSelection)
    }

    return(
        <div className={"search-container"}>


            <form className={'search-form'} action={userSearchSelection}>

                <div>
                    <label htmlFor={"search-input"}  aria-label={"book search input"}></label>
                    <input id={"search-input"} type={"text"} placeholder={"e.g. 9780517542095"} />
                    <button  type={"submit"} className={"book-search-icon search-btn"} style={{ border: "none", background: "none", padding: 0,height:".05px",width:".05px", position:"static"}}> <img className={"book-search-icon"} src={"../../public/search_bookIcon.png"} alt={"book icon"}/> </button>
                </div>


                <div className={"search-by-radio-options"}>

                    <section className={"search-option-radio"}>
                        <input  defaultChecked={true} id="isbn-radio" type={"radio"} name={"search-by"} value="isbn"/>
                        <label className={"search-by-label"} htmlFor={"isbn-radio"}>Search by ISBN</label>
                    </section>


                    <section className={"search-option-radio"}>
                        <input id={"title-radio"} type={"radio"} name={"search-by"} value="title"/>
                        <label className={"search-by-label"} htmlFor={"title-radio"}>Search by Title</label>
                    </section>


                    <section className={"search-option-radio"}>
                        <input id={"author-radio"} type={"radio"} name={"search-by"} value="author" />
                        <label className={"search-by-label"} htmlFor={"author-radio"}>Search by Author</label>
                    </section>

                </div>

            </form>

        </div>

    )
}

export {SearchContainer}