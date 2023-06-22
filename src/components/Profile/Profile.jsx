import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
    user : {
        username,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
    },
}) => {
    return (
        <div className={css.basic}>
            <div className={css.description}>
                <img src={avatar} alt={username} className={css.avatar} />
                <p className={css.username}>{username}</p>
                <p className={css.tag}>&#64;{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
   
   <ul className={css.list}>
    <li className={css.item}>
          <span className={css.name}>Followers</span>
          <span className={css.info}>{followers}</span>
    </li>
    <li className={css.item}>
          <span className={css.name}>Views</span>
          <span className={css.info}>{views}</span>
    </li>
    <li className={css.item}>
          <span className={css.name}>Likes</span>
          <span className={css.info}>{likes}</span>
    </li>
   </ul>
        </div>
    );
}

Profile.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };