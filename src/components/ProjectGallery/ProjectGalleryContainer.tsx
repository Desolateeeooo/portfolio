import ProjectGalleryPresentational from "./ProjectGalleryPresentational";

function ProjectGalleryContainer() {

	const imageCount = [1, 2, 3, 4];

	return <ProjectGalleryPresentational imageCount={imageCount}/>;
}

export default ProjectGalleryContainer;