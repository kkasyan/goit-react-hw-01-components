import { TableHead } from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';
import { TableRow } from './TableRow/TableRow';
import { Table } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead />
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id} type={type} amount={amount} currency={currency} />
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
