import ProjectCardPresentational from "./ProjectCard/ProjectCardPresentational";
import styles from "@/components/MyProjects/MyProjects.module.css";

function MyProjectsPresentational() {
	return (
		<div className={styles.projects_container}>
			<h2>Мои проекты</h2>
			<ProjectCardPresentational />
		</div>
	)
}

export default MyProjectsPresentational;

