import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 1em;
  margin: 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 12px;
  color: #000;

  &:active {
    background: #333;
    color: #fff;
  }
`;
