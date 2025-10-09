import Image from "next/image";
import styles from "./page.module.css";
import NavBarPresentational from "@/components/NavBar/NavBarPresentational";
import AboutMeContainer from "@/components/AboutMe/AboutMeContainer";
import MyProjectsPresentational from "@/components/MyProjects/MyProjectsPresentational";
import FooterPresentational from "@/components/Footer/FooterPresentational";

export default function Home() {
	return (
		<div>
			<NavBarPresentational />
			<main>
				<AboutMeContainer />
				<MyProjectsPresentational />
			</main>
			<footer>
				<FooterPresentational />
			</footer>
		</div>
	);
}
