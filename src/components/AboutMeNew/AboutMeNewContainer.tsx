import AboutMeNewPresentational from "./AboutMeNewPresentational";

function AboutMeNewContainer() {
	const iconsIndexes = [];
	
	for (let i = 1; i <= 14; i++) {
		iconsIndexes.push(i);
	}

	return <AboutMeNewPresentational iconsIndexes={iconsIndexes}></AboutMeNewPresentational>;

}

export default AboutMeNewContainer;