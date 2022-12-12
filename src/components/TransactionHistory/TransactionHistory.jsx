import { TableHead } from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';
import { Table } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ id, type, amount, currency }) => {
  return (
    <Table>
      <TableHead />
      <TableBody key={id} type={type} amount={amount} currency={currency} />
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
