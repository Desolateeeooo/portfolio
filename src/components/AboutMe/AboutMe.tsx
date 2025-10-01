import Image from "next/image";
import styles from "@/components/AboutMe/AboutMe.module.css"

function AboutMe() {
	return (
		<div>
			<Image 
				src={"/static/images/me.png"}
				alt="My picture"
				width={345}
				height={345}
				className={styles.my_image}
			/>
		</div>
	)	
}

export default AboutMe;