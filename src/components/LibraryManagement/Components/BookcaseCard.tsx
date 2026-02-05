import { ProgressCard } from "./Progress";

function BookcaseCard(props: any) {
    return (
        <div className="border-gray-300 bookcase-card w-475px h-275px m-5 p-20 hover onclick cursor-pointer">
            <h1 className="blu-2">{props.location}</h1>
            <section className="flex txt-18 gap-5 mb-10">
                <p>{props.zone}</p>
                <p>•</p>
                <p>{props.identifier}</p>
            </section>

            {/* <section className=" flex txt-14 gap-5 ">
                <p className="fw-600">{props.capacity}</p>
                <p>Capacity</p>
            </section> */}

            {/* <section className="flex txt-14 gap-5">
                <p> <span className="fw-600">{props.placed}</span> placed</p>
                <p><span className="fw-600">{props.open}</span> open</p>
            </section> */}
            <ProgressCard current={props.placed ?? "0"} total={props.capacity} />

            {/* <section className="flex txt-14 gap-25 mt-10">
                <p>Last Placed: {props.lastPlacedTitle}</p>
                <p>•{props.lastPlacedAgo}</p>
            </section> */}
        </div>
    );
}

export { BookcaseCard };
