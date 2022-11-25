import { Profile } from './task1/Profile/Profile';
import { Statistics } from './task2/Statistics/Statistics';
import { FriendList } from './task3/FriendList/FriendList';
import { TransactionHistory } from './task4/TransactionHistory/TransactionHistory';
import styled from '@emotion/styled';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
