"use client";
import styles from "@/components/NavBar/NavBar.module.css";
import { useState, useEffect } from "react";

interface NavBarPresentationalProps {
	isActive: (targetHash: string) => boolean;
}

function NavBarPresentational({isActive}: NavBarPresentationalProps) {

	return (
		<nav className={styles.my_nav}>
			<div>
				<a 
					href="#about" 
					className={isActive("#about") ? styles.my_link_active : styles.my_link}
				>
					О себе
				</a>
				<hr className={isActive("#about") ? styles.hr_active : styles.hr_not_active} />
			</div>
			<div>
				<a 
					href="#projects" 
					className={isActive("#projects") ? styles.my_link_active : styles.my_link}
				>
					Мои проекты
				</a>
				<hr className={isActive("#projects") ? styles.hr_active : styles.hr_not_active} />
			</div>
			<div>
				<a 
					href="#contacts" 
					className={isActive("#contacts") ? styles.my_link_active : styles.my_link}
				>
					Контакты
				</a>
				<hr className={isActive("#contacts") ? styles.hr_active : styles.hr_not_active} />
			</div>
		</nav>
	);
}

export default NavBarPresentational;