import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 35px;
  padding-left: 7px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Status = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'grey';
    }
  }};
`;

export const Avatar = styled.img`
  margin-right: 5px;
  margin-left: 5px;
`;

export const Name = styled.p`
  font-size: 20px;
`;
