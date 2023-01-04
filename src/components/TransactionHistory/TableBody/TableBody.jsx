import { Body } from './TableBody.styled';
import PropTypes from 'prop-types';

export const TableBody = ({ children }) => {
  return <Body>{children}</Body>;
};

TableBody.propTypes = { children: PropTypes.array.isRequired };
