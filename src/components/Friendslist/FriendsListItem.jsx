import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export const FriendsListItem = ({
avatar,
name,
isOnline,
id
}) => {
    return (
        <li className={css.item} key={id}>
            <span  className={isOnline ? `${css.isOnline}` : `${css.isOffline}`}></span>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendsListItem.propTypes = {
avatar : PropTypes.string.isRequired,
name : PropTypes.string.isRequired,
isOnline : PropTypes.bool.isRequired,
id : PropTypes.string,
};