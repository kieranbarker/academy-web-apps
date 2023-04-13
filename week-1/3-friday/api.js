import { getStorage, setStorage } from "./storage.js";

export default async function getPhotos() {
	const photos = getStorage();
	if (photos) return photos;

	const API = "https://vanillajsacademy.com/api/photos.json";

	try {
		const response = await fetch(API);
		const photos = await response.json();
		setStorage(photos);
		return photos;
	} catch (error) {
		throw error;
	}
}
