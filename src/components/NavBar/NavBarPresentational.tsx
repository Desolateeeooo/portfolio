import Link from "next/link";
import styles from "@/components/NavBar/NavBar.module.css"

function NavBarPresentational() {
	return (
		<nav className={styles.my_nav}>
			<Link href={""} className={styles.my_link}>О себе</Link>
			<Link href={""} className={styles.my_link}>Мои проекты</Link>
			<Link href={""} className={styles.my_link}>Контакты</Link>
		</nav>
	)
}

export default NavBarPresentational;