import { ProgressCard } from "./Progress";

function BookcaseCard() {
    return (
        <div className="border-gray-300 bookcase-card w-475px h-275px m-5 p-20 hover onclick cursor-pointer">
            <h2>Basement</h2>
            <section className="flex txt-18 gap-5 mb-10">
                <p>Northwall</p>
                <p>•</p>
                <p>A</p>
            </section>

            <section className=" flex txt-14 gap-5 ">
                <p className="fw-600">210</p>
                <p>Capacity</p>
            </section>

            <section className="flex txt-14 gap-5">
                <p> <span className="fw-600">78</span> placed</p>
                <p><span className="fw-600">132</span> open</p>
            </section>
            <ProgressCard current={78} total={210} />

            <section className="flex txt-14 gap-25 mt-10">
                <p>Last Placed: last placed book title</p>
                <p>•42d ago</p>
            </section>
        </div>
    );
}

export { BookcaseCard };
