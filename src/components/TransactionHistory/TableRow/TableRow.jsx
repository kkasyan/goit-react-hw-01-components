import { Row, Data } from './TableRow.styled';

export const TableRow = ({ transactions }) => {
  return transactions.map(item => (
    <Row key={item.id}>
      <Data>{item.type}</Data>
      <Data>{item.amount}</Data>
      <Data>{item.currency}</Data>
    </Row>
  ));
};
