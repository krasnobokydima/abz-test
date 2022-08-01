import React, {useEffect, useState} from 'react'
import { prepareImageName } from "../../helpers/prepareImgName";

const ImageField = ({imageUpload, setImageUpload}) => {
  const [visibleImage, setVisibleImage] = useState(false);
	const [imageName, setImageName] = useState(prepareImageName(null));

	useEffect(() => {
		setImageName(prepareImageName(imageUpload));
	}, [imageUpload]);

  return (
    <label
				className="form__label form__label--custom"
				onMouseEnter={() => {
					if (imageUpload) setVisibleImage(true);
				}}
				onMouseLeave={() => setVisibleImage(false)}
			>
				<span className="form__custom-input">{imageName}</span>
				<input
					type="file"
					id="file"
					className="form__input form__input--file"
					onChange={(e) => setImageUpload(e.target.files[0])}
				/>
				{imageUpload && (
					<img
						src={URL.createObjectURL(imageUpload)}
						alt="img preview"
						className={
							visibleImage ? "upload-image upload-image--active" : "upload-image"
						}
					/>
				)}
			</label>
  )
}

export default ImageField
