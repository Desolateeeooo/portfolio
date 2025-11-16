import styles from "./page.module.css";
import MyProjectsPresentational from "@/components/MyProjects/MyProjectsPresentational";
import FooterPresentational from "@/components/Footer/FooterPresentational";
import NavBarContainer from "@/components/NavBar/NavBarContainer";
import AboutMeNewContainer from '../components/AboutMeNew/AboutMeNewContainer';

export default function Home() {
	return (
		<div className={styles.flex_container}>
			<div id="invisible"></div>
			<div className={styles.main_container}>
				<NavBarContainer />
				<main>
					<AboutMeNewContainer />
					<MyProjectsPresentational />
				</main>
				<footer>
					<FooterPresentational />
				</footer>
			</div>
			<div id="invisible"></div>
		</div>
	);
}
