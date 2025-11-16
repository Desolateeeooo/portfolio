import ProjectCardContainer from "./ProjectCard/ProjectCardContainer";
import styles from "@/components/MyProjects/MyProjects.module.css";

function MyProjectsPresentational() {
	return (
		<div className={styles.projects_container} id="projects">
			<h2>Мои проекты:</h2>
			<section className={styles.projectsGallery}>
				<ProjectCardContainer />
				<ProjectCardContainer />
				<ProjectCardContainer />
				<ProjectCardContainer />
				<ProjectCardContainer />
				<ProjectCardContainer />
			</section>
		</div>
	);
}

export default MyProjectsPresentational;

