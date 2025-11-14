import styles from "@/components/BreadCrumb/BreadCrumb.module.css";
import Link from "next/link";

function BreadCrumbPresentational() {
	return (
		<div className={styles.breadCrumb_container}>
			<Link href={"/"}>projects</Link>
			{">"}
			<Link href={"/projects/1"}>project 1</Link>
		</div>
	);
}

export default BreadCrumbPresentational;