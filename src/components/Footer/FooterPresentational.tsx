import styles from "@/components/Footer/Footer.module.css";
import Image from "next/image";

function FooterPresentational() {
	return (
		<div className={styles.footer_container} id="contacts">
			<div className={styles.contact_card_container}>
				<h2>{"Связаться со мной"}</h2>
				<section className={styles.contact_card_grid_container}>
					<div className={styles.contact_card}>
						<Image
							src={"/static/images/icons/icon_9.svg"}
							alt="GitHub Icon"
							width={75}
							height={75}
						/>
						<p>
							<span>GitHub:</span> github.com/Desolateeeooo
						</p>
					</div>
					<div className={styles.contact_card}>
						<Image
							src={"/static/images/icons/gmail_icon.svg"}
							alt="Gmail Icon"
							width={75}
							height={75}
						/>
						<p>
							<span>Email:</span> ivan57goridko873@gmail.com
						</p>
					</div>
					<div className={styles.contact_card}>
						<Image
							src={"/static/images/icons/telegram_icon.svg"}
							alt="Telegram Icon"
							width={75}
							height={75}
						/>
						<p>
							<span>Telegram:</span> @desointj
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}

export default FooterPresentational;