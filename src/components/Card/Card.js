import equilibriumImage from '../../assets/images/equilibrium.jpg';
import avatarImage from '../../assets/images/avatar.png';
import styles from './Card.module.scss';

const Card = () => {
	return (
		<article className={styles.card}>
			<div className={styles['card-image']}>
				<img width="302" height="302" src={equilibriumImage} alt="" />
			</div>
			<div className={styles['card-content']}>
				<h2 className={styles['card-title']}>
					<a href="#/" className="btn btn--link">
						Equilibrium #3429
					</a>
				</h2>
				<p className={styles['card-desc']}>
					Our Equilibrium collection promotes balance and calm.
				</p>
				<ul className={styles['card-stats-list']}>
					<li className={styles['card-stats-list-item']}>
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>0.041 ETH</span>
					</li>
					<li className={styles['card-stats-list-item']}>
						<i className="icon-clock" aria-hidden="true"></i>
						<span>3 days left</span>
					</li>
				</ul>
				<div className={styles['card-author']}>
					<img
						className={styles['card-author-img']}
						width="33"
						height="33"
						src={avatarImage}
						alt="Jules Wyvern"
					/>
					<span className={styles['card-author-desc']}>
						Creation of&nbsp;
						<a href="#/" className="btn btn--link">
							Jules Wyvern
						</a>
					</span>
				</div>
			</div>
		</article>
	);
};

export default Card;
