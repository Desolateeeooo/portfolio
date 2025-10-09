import Link from "next/link";
import styles from "@/components/NavBar/NavBar.module.css"

function NavBarPresentational() {
	return (
		<nav className={styles.my_nav}>
			<div>
				<Link href={"#about"} className={styles.my_link}>О себе</Link>
				<hr />
			</div>
			<div><Link href={"#projects"} className={styles.my_link}>Мои проекты</Link></div>
			<div><Link href={"#contacts"} className={styles.my_link}>Контакты</Link></div>
		</nav>
	)
}

export default NavBarPresentational;