import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import { FriendsListItem } from './FriendsListItem';

export const FriendsList = ({friends}) => {
    return(
        <ul className={css.list}>
            {friends.map(friend =>(
      <FriendsListItem
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
      key={friend.id}
      />
            ))}
        </ul>
    );
};

FriendsList.propTypes = {
    friends : PropTypes.array.isRequired,
};