import { Row, Data } from './TableRow.styled';
import transactions from '../../data/transactions';

export const TableRow = ({ id, type, amount, currency }) => {
  return transactions.map(item => (
    <Row key={item.id}>
      <Data>{item.type}</Data>
      <Data>{item.amount}</Data>
      <Data>{item.currency}</Data>
    </Row>
  ));
};
