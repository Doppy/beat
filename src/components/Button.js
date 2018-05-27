import styled from "styled-components";
import { primaryColor } from '../theme';

export default styled.a`
  box-sizing: border-box;
  font-family: Bebas;
  font-size: 16px;
  color: ${primaryColor};
  border: 2px solid ${primaryColor};
  display: inline-block;
  padding: 12px 26px 11px;
  border-radius: 22px;
  cursor: pointer;
`;