import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../Grid';
import List, { ListItem, ListHeader } from '../List';
import { primaryColor } from '../../theme';

import beatByDrDre from './beat-by-drdre.png';

const Wrapper = styled.footer`
  background: black;
  color: white;
`;

const HashHeader = styled.div`
  text-align: center;
  font-family: Bebas;
  font-size: 48px;
  padding: 2em 0 1em;
  border-bottom: 1px solid ${primaryColor};
`;

export default () => (
  <Wrapper>
    <Container>
      <HashHeader># The Game Start Here</HashHeader>
      <Row>
        <Col span={4}>
          <List>
            <ListHeader>Company</ListHeader>
            <ListItem>About us</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>News &amp; Events</ListItem>
            <ListItem>Press Center</ListItem>
            <ListItem>Terms of Use</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </List>
        </Col>
        <Col span={4}>
          <List>
            <ListHeader>Support</ListHeader>
            <ListItem>Product Help</ListItem>
            <ListItem>Shopping Help</ListItem>
            <ListItem>Update My Beats</ListItem>
            <ListItem>Contact Us</ListItem>
          </List>
        </Col>
        <Col span={4}>
          TODO
        </Col>
      </Row>
      <Row>
        <Col span={3}>
          <img src={beatByDrDre} alt="" />
        </Col>
        <Col span={6} style={{ textAlign: 'center' }}>
          © Beats Electronics LLC. All Rights Reserved
        </Col>
      </Row>
    </Container>
  </Wrapper>
)