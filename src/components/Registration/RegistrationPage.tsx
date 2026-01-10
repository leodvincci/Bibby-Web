import BibbyLogo from "../../../public/bibbyLogo.png";
function RegistrationPage(){


    return(
        <div id={"registration-page"} className="reg-background">
            <div className="registration-container">
                <img className="bibby-logo" src={BibbyLogo} alt="book background"/>
                <h3 className="call-to-action">Add your first book.</h3>
            </div>
        </div>
    )

}

export {RegistrationPage}