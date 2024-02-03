import equilibriumImage from '../../assets/images/equilibrium.jpg';
import avatarImage from '../../assets/images/avatar.png';
import styles from './Card.module.scss';

const Card = () => {
	return (
		<article className={styles.card}>
			<div className={styles['card__image']}>
				<img width="302" height="302" src={equilibriumImage} alt="" />
			</div>
			<div className={styles['card__content']}>
				<h2 className={styles['card__title']}>
					<a href="#/" className="btn btn--link">
						Equilibrium #3429
					</a>
				</h2>
				<p className={styles['card__desc']}>
					Our Equilibrium collection promotes balance and calm.
				</p>
				<ul className={styles['card__stats-list']}>
					<li className={styles['card__stats-list-item']}>
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>0.041 ETH</span>
					</li>
					<li className={styles['card__stats-list-item']}>
						<i className="icon-clock" aria-hidden="true"></i>
						<span>3 days left</span>
					</li>
				</ul>
				<div className={styles['card__author']}>
					<img
						className={styles['card__author-img']}
						width="33"
						height="33"
						src={avatarImage}
						alt="Jules Wyvern"
					/>
					<span className={styles['card__author-desc']}>
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
