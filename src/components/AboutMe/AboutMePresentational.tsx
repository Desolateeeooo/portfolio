import Image from "next/image";
import styles from "@/components/AboutMe/AboutMe.module.css"

interface AboutMePresentationalProps {
	iconsIndexes: number[]
}

function AboutMePresentational({ iconsIndexes }: AboutMePresentationalProps) {
	return (
		<div className={styles.about_me_container}>
			<div className={styles.image_container}>
				<Image
					src={"/static/images/me_3.jpeg"}
					alt="My picture"
					width={345}
					height={345}
				/>
			</div>
			<div className={styles.my_stack}>
				<section>
					<h2>Мой стэк</h2>
					<p>
						React, JS, TS, Git, GitHub, Redux, Node.js
						Figma, CSS, SCSS, HTML, Next, PostgreSQL, SQL
					</p>
					<ul className={styles.icons_list}>
						{iconsIndexes && iconsIndexes.map((iconIndex) => {
							return (
								<li key={iconIndex}>
									<Image
										src={`/static/images/icons/icon_${iconIndex}.svg`}
										alt={`library_icon_${iconIndex}`}
										width={75}
										height={75} />
								</li>
							)
						})
						}
					</ul>
				</section>
				<section>
					<h2>О себе</h2>
					<p><span>Иван, начинающий Full-Stack Разработчик.</span> Увлекаюсь созданием доступных и производительных веб-приложений.
						<br />
						<br />
						<span> Дополнительно с этим], занимаюсь проектированием Баз Данных, изучением СУБД и написанием запросов на SQL.</span></p>
						<br />
						<p>Благодаря вниманию к деталям и спокойствию, эффективно работаю даже в стрессовых ситуациях.</p>
						<br />
						<p><span>Свободно владею Английским языком, а так же изучаю Китайский.</span></p>
				</section>
			</div>
		</div>
	)
}

export default AboutMePresentational;