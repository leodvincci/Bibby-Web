import BibbyLogo from "../../../public/bibbyLogo.png";
import { Box, Button, Flex, TextField } from "@radix-ui/themes";

function RegistrationPage() {

    function handleSubmit(formData) {
        // Handle form submission logic here
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const password = formData.get('password');

        console.log("Sending to backend:", { firstName, lastName, email, password });
    }


    return (
        <div id={"registration-page"} className="reg-background">

            <div className="registration-container">
                <img className="bibby-logo" src={BibbyLogo} alt="book background" />
                {/* <p>A home for your shelves.</p>
                <p>Bibby builds your library.</p> */}

                <section className="registration-section">

                    <h3 className="call-to-action">Add your first book.</h3>

                    <form action={handleSubmit} className="registration-form">


                        <Flex direction="column" gap="3">
                            <label htmlFor="firstName">First Name
                                <Box maxWidth="500px">
                                    <TextField.Root size="3" aria-label="first name" name="firstName" placeholder="First Name" />
                                </Box>
                            </label>

                            <label htmlFor="lastName">Last Name
                                <Box maxWidth="500px">
                                    <TextField.Root size="3" aria-label="last name" name="lastName" placeholder="Last Name" />
                                </Box>
                            </label>

                            <label htmlFor="email">Email

                                <Box maxWidth="500px">
                                    <TextField.Root size="3" type="email" aria-label="email" name="email" placeholder="Email" />
                                </Box>
                            </label>


                            <label htmlFor="password">Password

                                <Box maxWidth="500px">
                                    <TextField.Root size="3" aria-label="password" name="password" placeholder="Password" type="password" />
                                </Box>
                            </label>


                        </Flex>
                        <div className="registration-buttons">
                            <Flex gap="3" align="center">
                                <Button color="orange" size="3" variant="solid">
                                    Start my library
                                </Button>
                            </Flex>
                            <button className="gsi-material-button">
                                <div className="gsi-material-button-state"></div>
                                <div className="gsi-material-button-content-wrapper">
                                    <div className="gsi-material-button-icon">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: "block" }}>
                                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                            <path fill="none" d="M0 0h48v48H0z"></path>
                                        </svg>
                                    </div>
                                    <span className="gsi-material-button-contents">Continue with Google</span>
                                    <span style={{ display: "none" }}>Continue with Google</span>
                                </div>
                            </button>
                        </div>

                    </form>
                </section>


                <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>
        </div>
    )

}

export { RegistrationPage }