import ProjectCardPresentational from "./ProjectCardPresentational";

function ProjectCardContainer() {
	const projectId = 1;

	return (
		<ProjectCardPresentational 
			projectId={projectId}
		/>
	);
}

export default ProjectCardContainer;