import { API_URL } from "../config/api";
import { ProgressCard } from "./ProgressCard";
import { useState } from "react";

function BookcaseCard(props: any) {

	console.log("props: ", props);
	const [isEditMenu, setIsEditMenu] = useState(false);

	function handleDelete() {
		fetch(`${API_URL}/api/v1/bookcase/delete/${props.bookcaseId}`, {
			method: "DELETE",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					window.location.reload();
				} else {
					console.error("Delete failed:", response.status);
				}
			})
			.catch((error) => console.error("Error:", error));
	}

	return (
		<div className="border-gray-300 bookcase-card w-475px m-5 p-20 hover onclick cursor-pointer">
			<p onClick={(e) => { e.preventDefault(); setIsEditMenu(!isEditMenu); }} className=" flex row just-end txt-10 blu w-8p ml-90p trans-50p hover-meatballs">● ● ●</p>

			<h1 className="blu-2">{props.location}</h1>

			<section className="  flex row w-100p gap-10 ">

				<div className="flex row gap-5 txt-14">
					<p>{props.zone}</p>
					<p>•</p>
					<p>{props.identifier}</p>
				</div>

				{
					isEditMenu &&

					<div className="border-gray-300 w-150px m-10 h-8 white-bg p-10  ">

						<section onClick={(e) => { e.preventDefault(); }} className="delete-option h-1p m-10">
							<img src="/edit.png" className="w-8" alt="" />

							<p className="blu hover-bold">edit</p>
						</section>
						<div>
							<hr style={{ borderTop: "1px solid #4b8b9c1c" }} />
						</div>

						<section onClick={(e) => { e.preventDefault(); handleDelete(); }} className="hover-bold delete-option h-12p m-10">
							<img src="/delete.png" className="w-8" alt="" />
							<p className="red ">delete</p>
						</section>
					</div>
				}

			</section>



			{/* <section className=" flex txt-14 gap-5 ">
                <p className="fw-600">{props.capacity}</p>
                <p>Capacity</p>
            </section> */}

			{/* <section className="flex txt-14 gap-5">
                <p> <span className="fw-600">{props.placed}</span> placed</p>
                <p><span className="fw-600">{props.open}</span> open</p>
            </section> */}

			{
				!isEditMenu && <ProgressCard current={props.placed ?? "0"} total={props.capacity} />

			}

			{/* <section className="flex txt-14 gap-25 mt-10">
                <p>Last Placed: {props.lastPlacedTitle}</p>
                <p>•{props.lastPlacedAgo}</p>
            </section> */}
		</div>
	);
}

export { BookcaseCard };
