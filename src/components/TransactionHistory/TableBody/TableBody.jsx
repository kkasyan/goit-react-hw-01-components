import { Body } from './TableBody.styled';
import { TableRow } from '../TableRow/TableRow';

export const TableBody = ({ id, type, amount, currency }) => {
  return (
    <Body>
      <TableRow key={id} type={type} amount={amount} currency={currency} />
    </Body>
  );
};
