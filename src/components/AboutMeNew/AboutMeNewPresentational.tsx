import Image from "next/image";
import styles from "@/components/AboutMeNew/AboutMeNew.module.css";

interface AboutMeNewPresentationalProps {
	iconsIndexes: number[]
}

function AboutMeNewPresentational({ iconsIndexes }: AboutMeNewPresentationalProps) {
	return (
		<div className={styles.about_me_container} id="about">
			<div className={styles.flex_container}>
				<div className={styles.image_container}>
					<Image
						src={"/static/images/me_3.jpeg"}
						alt="My picture"
						width={240}
						height={240}
					/>
				</div>
				<div className={styles.my_stack}>
					<section>
						<h2>Мой стэк</h2>
						<p>
							<span>
								React, Redux, JS, TS, HTML, CSS, SCSS, CSS-in-JS, Express.js, Next.js, Node.js, SQL, PostgreSQL
							</span>
						</p>
						<ul className={styles.icons_list}>
							{iconsIndexes && iconsIndexes.map((iconIndex) => {
								return (
									<li key={iconIndex}>
										<Image
											src={`/static/images/icons/icon_${iconIndex}.svg`}
											alt={`library_icon_${iconIndex}`}
											width={49}
											height={49} />
									</li>
								);
							})
							}
						</ul>
					</section>
				</div>
			</div>
			<section>
				<h2>О себе</h2>
				<p>
					<span>Иван, начинающий Full-Stack Разработчик.</span>
					Увлекаюсь созданием доступных и производительных веб-приложений.
					<span>Я студент 3 курса НВГУ, факультета Информационных систем и технологий.</span>
					<br />
					<br />
					<span>
						Вместе с этим, активно занимаюсь математикой, спортом.
						Так же в последнее время изучаю интеллектуальный анализ данных с помощью средств языка Python.
					</span>
				</p>
				<br />
				<p>Благодаря вниманию к деталям и спокойствию, эффективно работаю даже в стрессовых ситуациях.</p>
				<br />
				<p><span>Свободно владею Английским языком, а так же изучаю Китайский.</span></p>
			</section>
		</div>
	);
}

export default AboutMeNewPresentational;