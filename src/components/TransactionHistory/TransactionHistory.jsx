import { Table } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

import { TableHead } from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';
import { TableRow } from './TableRow/TableRow';

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
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
