import { List } from './FriendList.styled';
import friends from '../../data/friends';
import { FriendItem } from '../FriendItem/FriendItem';
import PropTypes from 'prop-types';

export const FriendList = () => {
  return (
    <List>
      <FriendItem friends={friends} />
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
