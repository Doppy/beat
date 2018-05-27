import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../Grid';
import SectionHeader from '../SectionHeader';
import Button from '../Button';
import IconMore from '../icons/IconMore';


const SectionWrapper = styled.div`
  height: 740px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default () => (
  <SectionWrapper>
    <Container>
      <Row style={{ alignItems: 'center' }}>
        <Col>
          <SectionHeader>Explore</SectionHeader>
        </Col>
        <Col>
          <Content>
            <img src="/img/running-lady.jpg" alt="Running Lady" />
            <p>Performance. Power. Freedom</p>
            <Button>Discover <IconMore style={{ marginLeft: 10 }} /></Button>
          </Content>
        </Col>
      </Row>
    </Container>
  </SectionWrapper>
)