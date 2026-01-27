import { Nav } from "../Nav/Nav";
import { Button } from "@radix-ui/themes"

function AddBookcasePage() {
    return (
        <div>
            <Nav />
            <section className="flex-column justify-center align-itms-ctr mt-50 p-20 mr-300">
                <div>
                <h1 className="blu fw-500" >Add a new bookcase to your library</h1>
                <p className="txt-14 mp-0">Configure your bookcase details and capacity settings below.</p>

                </div>


            </section>

            <form className="add-bookcase-form">
                <section id="location-section" className="flex-column  p-20 gap-25 justify-center align-itms-ctr mt-25">

                    <div className="flex-column">
                        <label className=" txt-13 mr-10 fw-400" htmlFor="Location">
                            Location
                        </label>
                        <input type="text" id="Location" name="Location" className=" w-800 h-40 br-60 bg-grey-light" placeholder="e.g. Office, Basement, Bedroom" />

                    </div>

                    <div className="flex-column">
                        <label className=" txt-13 mr-10 fw-400" htmlFor="Zone">
                            Zone
                        </label>
                        <input type="text" id="Zone" name="Zone" className=" w-800 h-40 br-60 bg-grey-light" placeholder="e.g. NorthWall, Desk, Corner, BackWall, CouchSide, Main, WindowSide" />
                        <p className="txt-8 blu">Specify the area within the location</p>
                    </div>

                    <div className="flex-column">
                        <label className=" txt-13 mr-10 fw-400" htmlFor="Bookcase-Identifier">
                            Bookcase Identifier
                        </label>
                        <input type="text" id="Bookcase-Identifier" name="Bookcase-Identifier" className=" w-800 h-40 br-60 bg-grey-light" placeholder="e.g. A, B, C or 1, 2, 3 " />
                        <p className="txt-8 blu">Use A/B/C or 1/2/3 - keep it consistent per room.</p>
                    </div>





                </section>

                <section id="capacity-section" className=" flex-column p-20 gap-10 maxw-850 mt-30 align-center">
                    <p className="fw-500">Capacity</p>

                    <div>
                        <label className="blu txt-13 mr-10 fw-400" htmlFor="shelfCount">
                            Shelf Count
                        </label>
                        <input required type="number" id="shelfCount" name="shelfCount" className=" w-7 h-40 br-60 bg-grey-light mb-20" placeholder="42" />
                    </div>

                    <div>
                        <label className="blu txt-13 mr-10 fw-400" htmlFor="shelfCapacity">
                            Shelf Capacity
                        </label>
                        <input required type="number" id="shelfCapacity" name="shelfCapacity" className=" w-7 h-40 br-60 bg-grey-light mb-20" placeholder="42" />
                    </div>

                    <Button style={{ width: "800px" }} type="submit" size="3" color="cyan" variant="solid">Create Bookcase</Button>

                </section>


            </form>
        </div>
    );
}
export { AddBookcasePage }