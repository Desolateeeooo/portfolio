import Image from "next/image";
import styles from "./page.module.css";
import NavBarPresentational from "@/components/NavBar/NavBarPresentational";
import AboutMeContainer from "@/components/AboutMe/AboutMeContainer";

export default function Home() {
	return (
		<div>
			<NavBarPresentational />
			<main>
				<AboutMeContainer />
			</main>
		</div>
	);
}
