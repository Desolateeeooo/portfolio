async function ProjectGalleryPage({ params }: { params: { projectId: string } }) {
	const { projectId } = await params;

	return (
		<>
			<h1>Greetings user</h1>
			{projectId}
		</>
	);
}

export default ProjectGalleryPage;