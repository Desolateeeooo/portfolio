import AboutMePresentational from "./AboutMePresentational";

function AboutMeContainer() {
	const iconsIndexes = []
	
	for (let i = 1; i <= 12; i++) {
		iconsIndexes.push(i)
	}

	return <AboutMePresentational iconsIndexes={iconsIndexes}></AboutMePresentational>

}

export default AboutMeContainer;