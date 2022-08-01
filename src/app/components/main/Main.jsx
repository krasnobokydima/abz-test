import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Button from "../button/Button";
import Form from "../form/Form";

import { readUsers } from "../../firebase/readUsers";

const Main = () => {
	const [usersCards, setUsersCards] = useState(null);

	useEffect(() => readUsers(setUsersCards), []);

	return (
		<main className="main">
			<section className="main__section container">
				<h2 className="main__title">Working with GET request</h2>
				<div className="main__container">
					{usersCards ? (
							usersCards.map((employer) => (
								<Card employer={employer} key={employer.id} />
							))
					) : (
						"Empty list =("
					)}
				</div>
				{usersCards && (
					<Button
						value="Show more"
						id="show-more"
						large
						onClick={() => readUsers(setUsersCards)}
					/>
				)}
			</section>
			<section className="main__section container">
				<h2 className="main__title">Working with POST request</h2>
				<Form />
			</section>
		</main>
	);
};

export default Main;
