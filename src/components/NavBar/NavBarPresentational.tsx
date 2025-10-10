"use client"

import Link from "next/link";
import styles from "@/components/NavBar/NavBar.module.css"

interface NavBarPresentational {
	pathname: string | null;
	currentHash: string;
}

function NavBarPresentational({ pathname, currentHash }: NavBarPresentational) {

	return (
		<nav className={styles.my_nav}>
			<div>
				<a href={"/#about"} className={currentHash === "#about" ? styles.my_link_active : styles.my_link}>О себе</a>
				<hr className={currentHash === "#about" ? styles.hr_active : styles.hr_not_active} />
			</div>
			<div>
				<a href={"/#projects"} className={currentHash === "#projects" ? styles.my_link_active : styles.my_link}>Мои проекты</a>
				<hr className={currentHash === "#projects" ? styles.hr_active : styles.hr_not_active} />
			</div>
			<div>
				<a href={"/#contacts"} className={currentHash === "#contacts" ? styles.my_link_active : styles.my_link}>Контакты</a>
				<hr className={currentHash === "#contacts" ? styles.hr_active : styles.hr_not_active} />
			</div>
		</nav>
	)
}

export default NavBarPresentational;