import React from 'react'

const RadioField = ({inputs, radioCheck, setRadioCheck, label}) => {
	return (
		<div className="form__check">
				<legend className="form__check-legend">{label ? label : 'Select your position'}</legend>
				{inputs.map(({ id, value }) => {
					return (
					<label htmlFor={id} className="form__label" key={id}>
						<input
							type="radio"
							className="form__check-input"
							id={id}
							name="profession"
							checked={value === radioCheck}
							onChange={() => setRadioCheck((prev) => ({...prev, "profession": value}))}
						/>
						{value}
					</label>
				)
				})}
			</div>
	)
}

export default RadioField
