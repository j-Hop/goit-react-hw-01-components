import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistic = ({title, stats}) => {
    return(
        <section className={css.basic}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.list}>
           {stats.map(stat =>( <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
            </li>
))}
        </ul>
        </section>
    );
};


Statistic.propTypes ={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired
};