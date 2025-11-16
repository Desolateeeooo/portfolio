import Image from "next/image";
import styles from "@/components/ProjectGallery/ProjectGallery.module.css";

function ProjectGalleryPresentational({ imageCount }: { imageCount: number[] }) {
	return (
		<div className={styles.gallery_container}>
			<div className={styles.image_container}>
				<Image
					src={"/static/images/projects/boss_machine/boss_machine.png"}
					alt="Boss Machine project picture"
					width={850}
					height={374}
				/>
			</div>
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
			<div className={styles.flex_container}>
				{imageCount && imageCount.map((id) => {
					return (<Image
						key={id}
						src={"/static/images/projects/boss_machine/boss_machine.png"}
						alt={`Boss machine project picture #${id}`}
						width={196}
						height={92}
					/>);
				})
				}
			</div>
			<div className={styles.move_bar_container}>
				<div className={styles.move_bar}>
					
				</div>
			</div>
			<div className={styles.section_flex_container}>
				<section>
					<p>text text text text text text text text text text text text</p>
					<p>Дата окончания работы над проектом:</p>
				</section>
			</div>
		</div>
	);
}

export default ProjectGalleryPresentational;