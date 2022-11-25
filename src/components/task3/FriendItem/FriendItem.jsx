import { Item, Status, Avatar, Name } from './Item.styled';
// import PropTypes from 'prop-types';

export const FriendItem = ({ friends }) => {
  return friends.map(item => (
    <Item key={item.id}>
      <Status isOnline={item.isOnline}>{item.isOnline}</Status>
      <Avatar src={item.avatar} alt="User avatar" width="48" />
      <Name>{item.name}</Name>
    </Item>
  ));
};
