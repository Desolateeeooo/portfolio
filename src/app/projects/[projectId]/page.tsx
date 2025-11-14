import styles from "@/app/projects/[projectId]/page.module.css";
import BreadCrumbContainer from '../../../components/BreadCrumb/BreadCrumbContainer';

async function ProjectGalleryPage({ params }: { params: { projectId: string } }) {
	const { projectId } = await params;

	return (
		<div className={styles.flex_container}>
			<div id="invisible"></div>
			<div className={styles.main_container}>
				<main>
					<BreadCrumbContainer />
					<h1>Express project {projectId}</h1>
				</main>
				<div id="invisible"></div>
			</div>
		</div>
	);
}

export default ProjectGalleryPage;