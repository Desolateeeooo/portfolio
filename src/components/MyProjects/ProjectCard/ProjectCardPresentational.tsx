import Image from "next/image";
import styles from "@/components/MyProjects/ProjectCard/ProjectCard.module.css";
import Link from "next/link";

function ProjectCardPresentational({projectId}: { projectId: number }) {
	return (
		<div className={styles.projectCard}>
			<div className={styles.screenshotContainer}>
				<Image
					src={"/globe.svg"}
					alt={"Project icon"}
					width={350}
					height={200}
					className={styles.mainScreenshot}
				/>
			</div>
			<div className={styles.projectInfo}>
				<h3 className={styles.projectTitle}>Placeholder for Title</h3>
				<p>Placeholder for text</p>

				<div className={styles.techStack}>
					<p>React, JS, Node.js, Express.js</p>
				</div>
			</div>
			<Link href={`/projects/${projectId}`} className={styles.viewProjectLink}>
				Посмотреть
			</Link>
		</div>
	);
}

export default ProjectCardPresentational;