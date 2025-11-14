import Image from "next/image";
import styles from "@/components/ProjectGallery/ProjectGallery.module.css";

function ProjectGalleryPresentational() {
	return (
		<>
			<Image
				src={"/static/images/projects/boss_machine/boss_machine.png"}
				alt="Boss Machine project picture"
				width={850}
				height={374}
			/>
			<div className={styles.arrows_btn_container}>
				<Image 
					src={"/static/images/icons/left_arrow.png"}
					alt="Previous image button"
					width={72}
					height={52}
				/>
				<Image 
					src={"/static/images/icons/right_arrow.png"}
					alt="Next image button"
					width={72}
					height={52}
				/>
			</div>
		</>
	);
}

export default ProjectGalleryPresentational;