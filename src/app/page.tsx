import Image from "next/image";
import styles from "./page.module.css";
import NavBarPresentational from "@/components/NavBar/NavBarPresentational";
import AboutMe from "@/components/AboutMe/AboutMePresentational";

export default function Home() {
	return (
		<div>
			<NavBarPresentational />
			<main>
				<AboutMe />
			</main>
		</div>
	);
}
