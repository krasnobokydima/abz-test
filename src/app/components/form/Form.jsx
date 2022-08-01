import React, { useState } from "react";

import Button from "../button/Button";
import TextField from "../textField/TextField";
import { formInputs, radioInputs } from "../../../config";

import { writeUserData } from "../../firebase/writeUserData";
import { saveUserImage } from "../../firebase/saveUserImage";
import ImageField from "../imageField/ImageField";
import RadioField from "../radioField/RadioField";
import { v4 } from 'uuid';

const initialState = {
	name: "",
	email: "",
	tel: "",
	profession: radioInputs[0].value,
	imageUrl: "",
};

const Form = () => {
	const [data, setData] = useState(initialState);
	const [imageUpload, setImageUpload] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const preparedData = {...data, id: v4()}

		setImageUpload(null);
		setData({ ...initialState });

		if (imageUpload) {
			writeUserData({ ...preparedData, imageUrl: await saveUserImage(imageUpload) });
		} else {
			await writeUserData(preparedData);
		}		
	};

	const changeInput = ({ target }) =>
		setData((prev) => ({ ...prev, [target.name]: target.value }));

	return (
		<form className="form sub-container" onSubmit={handleSubmit}>
			{formInputs.map(({ name, type, placeholder }) => (
				<TextField
					key={name}
					type={type}
					name={name}
					value={data[name]}
					onChange={(e) => changeInput(e)}
					placeholder={placeholder}
				/>
			))}

			<RadioField
				inputs={radioInputs}
				radioCheck={data.profession}
				setRadioCheck={setData}
			/>

			<ImageField imageUpload={imageUpload} setImageUpload={setImageUpload} />

			<div className="form__button">
				<Button value="Sign up" type="submit" disabled={Object.keys(data).some(key => !data[key] && key !== 'imageUrl')} />
			</div>
		</form>
	);
};

export default Form;
