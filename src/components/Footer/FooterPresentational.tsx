import styles from "@/components/Footer/Footer.module.css"

function FooterPresentational() {
	return (
		<div className={styles.footer_container}>
			<div className={styles.contact_card_container}>
				<h2>Связаться со мной</h2>
				<section className={styles.contact_card_grid_container}>
					<div className={styles.contact_card}>
						<div className={styles.text_flex_container}>
							<p>
								<span>GitHub:</span> github.com/Desolateeeooo
							</p>
						</div>
					</div>
					<div className={styles.contact_card}><p><span>Email:</span> ivan57goridko873@gmail.com</p></div>
					<div className={styles.contact_card}><p><span>Telegram:</span> @desointj</p></div>
				</section>
			</div>
		</div>
	)
}

export default FooterPresentational;