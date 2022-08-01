export const prepareImageName = (imageUpload) => {
  if (!imageUpload) return "choose image";

  const type = imageUpload.type.split("/")[1];

  return imageUpload.name.length > 25
    ? imageUpload.name.slice(0, 20) + "... ." + type
    : imageUpload.name;
}