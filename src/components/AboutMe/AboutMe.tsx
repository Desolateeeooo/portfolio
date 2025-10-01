import Image from "next/image";
import styles from "@/components/AboutMe/AboutMe.module.css"

function AboutMe() {
	return (
		<div className={styles.image_container}>
			<Image 
				src={"/static/images/me.jpeg"}
				alt="My picture"
				width={345}
				height={345}
			/>
		</div>
	)	
}

export default AboutMe;