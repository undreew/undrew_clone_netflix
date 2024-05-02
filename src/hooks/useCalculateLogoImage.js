export const useCalculateImage = (item, width) => {
	let image;

	if (width >= 1450) {
		image = item.largest;
	} else if (width >= 950) {
		image = item.large;
	} else if (width >= 550) {
		image = item.mobile;
	} else {
		image = item.mobile;
	}

	return {image};
};
