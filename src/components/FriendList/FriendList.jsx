import {
  List,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <>
      <List>
        {friends.map(({ id, avatar, isOnline, name }) => (
          <FriendListItem key={id}>
            <Status isOnline={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </FriendListItem>
        ))}
      </List>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
