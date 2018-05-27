import styled from 'styled-components';

export const Container = styled.div`
  width: 980px;
  max-width: 100%;
  margin: 0 auto;
`;


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'flex-start'};
`;

export const Col = styled.div`
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  flex-grow: 0;
  flex-shrink: 1;
  ${props => props.span && `flex-basis: ${(100 * (props.span || 12) / 12)}%`}
`;