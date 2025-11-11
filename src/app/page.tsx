import Image from "next/image";
import styles from "./page.module.css";
import AboutMeContainer from "@/components/AboutMe/AboutMeContainer";
import MyProjectsPresentational from "@/components/MyProjects/MyProjectsPresentational";
import FooterPresentational from "@/components/Footer/FooterPresentational";
import NavBarContainer from "@/components/NavBar/NavBarContainer";
import AboutMeNewContainer from '../components/AboutMeNew/AboutMeNewContainer';

export default function Home() {
	return (
		<div>
			<NavBarContainer />
			<main>
				{/* <AboutMeNewContainer /> */}
				<AboutMeContainer />
				<MyProjectsPresentational />
			</main>
			<footer>
				<FooterPresentational />
			</footer>
		</div>
	);
}
