import React from "react";
import { BsPersonCircle } from "react-icons/bs";

const Card = ({ employer }) => {
	const { title, profession, email, tel, imageUrl } = employer;

	return (
		<div className="card">
				{imageUrl.length ? (
					<img src={imageUrl} alt="employer" className="card__img" />
				) : (
					<BsPersonCircle size="70px" fill="rgb(244, 224, 65)" />
				)}
			<h3 className="card__title">{title}</h3>
			<div className="card__info">
				<p className="card__text">{profession}</p>
				<a className="card__link" href={`mailto:${email}`}>
					{email}
				</a>
				<a className="card__link" href={`tel:${tel}`}>
					{tel}
				</a>
			</div>
		</div>
	);
};

export default Card;
