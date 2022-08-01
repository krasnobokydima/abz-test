import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase-config";

import { createImgName } from "../helpers/createImgName";

export const saveUserImage = async (imageUpload) => {
	const imageRef = ref(storage, `images/${createImgName(imageUpload.name)}`);

	await uploadBytes(imageRef, imageUpload);

	return getDownloadURL(imageRef);
};
