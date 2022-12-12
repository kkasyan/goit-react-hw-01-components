import { Row, Data } from './TableRow.styled';

export const TableRow = ({ id, type, amount, currency }) => {
  return (
    <Row key={id}>
      <Data>{type}</Data>
      <Data>{amount}</Data>
      <Data>{currency}</Data>
    </Row>
  );
};
