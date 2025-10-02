import Image from "next/image";
import styles from "@/components/AboutMe/AboutMe.module.css"

function AboutMePresentational() {
	return (
		<div className={styles.about_me_container}>
			<div className={styles.image_container}>
				<Image
					src={"/static/images/me.jpeg"}
					alt="My picture"
					width={345}
					height={345}
				/>
			</div>
			<div className={styles.my_stack}>
				<section>
					<h2>Мой стэк:</h2>
					<p>
						React, JS, TS, Git, GitHub, Redux,
						Figma, CSS, SCSS, HTML, Next, PostgreSQL, SQL
					</p>
					<ul>
						<li>
							<Image 
								src={""}
								alt=""
								width={75}
								height={75}
							/>
						</li>
					</ul>
				</section>
			</div>
		</div>
	)
}

export default AboutMePresentational;