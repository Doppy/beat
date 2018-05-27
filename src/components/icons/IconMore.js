import React from 'react';
import styled from 'styled-components';
import { primaryColor } from '../../theme';

const Artboard = styled.svg.attrs({
  width: 14,
  height: 14,
})`
  display: inline-block;
  color: inherit;
  stroke: ${primaryColor};
  stroke-width: 8px;
  fill: transparent;
`;

export default (props) => (
  <Artboard viewBox="0 0 100 100" {...props}>
    <path d="M0,0 L50,50 L 0, 100" />
  </Artboard>
)