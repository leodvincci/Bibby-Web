import {type SearchBy, SearchBySegmented} from "./SearchBySegmented.tsx";
import {useState} from "react";

function SearchContainer(props:any){
    const [searchBy, setSearchBy] = useState<SearchBy>("isbn");




    function userSearchSelection(formData:any){
        const userSearchSelection = formData.get("search-by")
        const userSearchInput = formData.get("search-input")

        props.searchResult(userSearchSelection,userSearchInput);
    }

    return(
        <div className={"search-container"}>
            <form className={'search-form'} action={userSearchSelection}>

                <div className={"search-input-container"}>
                    <label htmlFor={"search-input"}  aria-label={"book search input"}></label>

                    <input required id={"search-input"} name={"search-input"} type={"text"} placeholder={"e.g. 9780517542095"} />
                    <p className={"search-bar-divider"}> </p>
                    <button  type={"submit"} className={"book-search-icon search-btn"} style={{ border: "none", background: "none", padding: 0,height:".05px",width:".05px", position:"static"}}> <img className={"book-search-icon"} src={"../../public/bookSearchIcon.png"} alt={"book icon"}/> </button>
                </div>

                <SearchBySegmented
                    value={searchBy}
                    onChange={setSearchBy}
                />


                {/*<div className={"search-by-radio-options"}>*/}

                {/*    <section className={"search-option-radio"}>*/}
                {/*        <input defaultChecked={true} id={"title-radio"} type={"radio"} name={"search-by"} value="title"/>*/}
                {/*        <label className={"search-by-label"} htmlFor={"title-radio"}>Title</label>*/}
                {/*    </section>*/}

                {/*    <section className={"search-option-radio"}>*/}
                {/*        <input id={"author-radio"} type={"radio"} name={"search-by"} value="author" />*/}
                {/*        <label className={"search-by-label"} htmlFor={"author-radio"}>Author</label>*/}
                {/*    </section>*/}

                {/*    <section className={"search-option-radio"}>*/}
                {/*        <input  id="publisher-radio" type={"radio"} name={"search-by"} value="publisher"/>*/}
                {/*        <label className={"search-by-label"} htmlFor={"publisher-radio"}>Publisher</label>*/}
                {/*    </section>*/}

                {/*    <section className={"search-option-radio"}>*/}
                {/*        <input  id="isbn-radio" type={"radio"} name={"search-by"} value="isbn"/>*/}
                {/*        <label className={"search-by-label"} htmlFor={"isbn-radio"}>ISBN</label>*/}
                {/*    </section>*/}

                {/*    <section className={"search-option-radio"}>*/}
                {/*        <input id={"tags-radio"} type={"radio"} name={"search-by"} value="tags" />*/}
                {/*        <label className={"search-by-label"} htmlFor={"tags-radio"}>Tags</label>*/}
                {/*    </section>*/}

                {/*</div>*/}

            </form>
        </div>

    )
}

export {SearchContainer}