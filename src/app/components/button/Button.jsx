import React from "react";

const Button = ({ value, id, secondary, large, center, type, disabled }) => {
	let style = "link-button";
	style += secondary ? " link-button--secondary" : "";
	style += large ? " link-button--large" : "";

	if (type) {
		return (
			<button href={"#" + id} className={style} type={type} disabled={disabled}>
				{value}
			</button>
		);
	}

	return (
		<a href={"#" + id} className={style} type={type}>
			{value}
		</a>
	);
};

export default Button;
