import BibbyLogo from "../../../public/bibbyLogo.png";
import { Box, Button, Flex, TextField } from "@radix-ui/themes";

function RegistrationPage() {


    return (
        <div id={"registration-page"} className="reg-background">
        
            <div className="registration-container">
                <img className="bibby-logo" src={BibbyLogo} alt="book background" />
                <p>A home for your shelves.</p>
                <p>Bibby builds your library.</p>
                <h3 className="call-to-action">Add your first book.</h3>

                <form className="registration-form">

                    <label htmlFor="firstName">First Name</label>

                    <Flex direction="column" gap="3">
                        <Box maxWidth="500px">
                            <TextField.Root size="3" name="firstName" placeholder="First Name" />
                        </Box>

                        <label htmlFor="lastName">Last Name</label>

                        <Box maxWidth="500px">
                            <TextField.Root size="3" name="lastName" placeholder="Last Name" />
                        </Box>

                        <label htmlFor="email">Email</label>
                        <Box maxWidth="500px">
                            <TextField.Root size="3" name="email" placeholder="Email" />
                        </Box>

                        <label htmlFor="password">Password</label>

                        <Box maxWidth="500px">
                            <TextField.Root size="3" name="password" placeholder="Password" type="password" />
                        </Box>
                    </Flex>
                    <Flex gap="3" align="center">
                        <Button color="orange" size="3" variant="soft">
                            Start my library
                        </Button>
                    </Flex>
                </form>

                <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>
        </div>
    )

}

export { RegistrationPage }