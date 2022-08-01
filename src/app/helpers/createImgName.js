import moment from "moment";

export const createImgName = (image) => {
	const imageArray = image.split(".");
	return (
		imageArray.slice(0, -1).join("") +
		moment().format("-DD_MM_YYYY-hh:mm:ss") +
		"." +
		imageArray.slice(-1)[0]
	);
};