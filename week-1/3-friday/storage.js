const STORAGE_KEY = "sparrow-photography";

export function getStorage() {
	const data = sessionStorage.getItem(STORAGE_KEY);
	return data && JSON.parse(data);
}

export function setStorage(data) {
	sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
