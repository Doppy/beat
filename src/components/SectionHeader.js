import styled from 'styled-components';
import { primaryColor } from '../theme';

export default styled.h2`
  display: inline-block;
  font-family: Bebas;
  font-size: 36px;
  color: ${primaryColor};
  margin-bottom: 0;
  &::after {
    content: '';
    display: block;
    width: 65px;
    height: 5px;
    background: black;
    margin: 10px auto;
  }
`;