import ProjectCardPresentational from "./ProjectCard/ProjectCardPresentational";
import styles from "@/components/MyProjects/MyProjects.module.css";

function MyProjectsPresentational() {
	return (
		<div className={styles.projects_container} id="projects">
			<h2>Мои проекты:</h2>
			<section className={styles.projectsGallery}>
				<ProjectCardPresentational />
				<ProjectCardPresentational />
				<ProjectCardPresentational />
				<ProjectCardPresentational />
				<ProjectCardPresentational />
				<ProjectCardPresentational />
			</section>
		</div>
	);
}

export default MyProjectsPresentational;

