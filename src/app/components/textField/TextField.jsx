import React from "react";

const TextField = ({ type, name, value, onChange, placeholder, label }) => {
	return (
		<>
			<input
				className="form__input"
				id={`user-${name}`}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required
				min={4}
				max={24}
			/>
			{label && <p className="form__input--help">{label}</p>}
		</>
	);
};

export default TextField;
