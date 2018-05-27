import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import Button from '../Button';
import { Container, Row, Col } from '../Grid';
import IconMore from '../icons/IconMore';

import beatRedImgSrc from './beat-red.png';
import { primaryColor } from '../../theme';

const SectionWrapper = styled.div`
  position: relative;
  height: 740px;
`;

const BackgroundElement = styled.div`
  background: black;
  height: 755px;
  width: 100%;
  top: 320px;
  position: absolute;
  z-index: -1;

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-right: 1600px solid black;
    border-top: 195px solid transparent;
    position: absolute;
    top:-195px;
    left: 0;
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-right: 1600px solid black;
    border-bottom: 195px solid transparent;
    position: absolute;
    bottom:-195px;
    left: 0;
  }
`;

const ImgWrapper = styled.div`
  flex-basis: 41.66%;
  flex-shrink: 1;
  flex-grow: 0;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Content = styled.div`
  text-align: center;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }

  h3 {
    color: white;
    font-family: Bebas;
    font-size: 52px;
    margin: 1em 0 0.3em;
  }
  p {
    color: ${primaryColor};
    font-family: Avenir;
  }
`;

export default () => (
  <SectionWrapper>
    <BackgroundElement />
    <Container>
      <Row>
        <Col span={5}>
          <img src={beatRedImgSrc} alt="Beat Red Img" />
        </Col>
        <Col span={7}>
          <Content>
            <SectionHeader>Feature</SectionHeader>
            <h3>Here what you want</h3>
            <p>A portion of (beats)RED Solo2 headphone sales will be donated to the Global fund to fight aids.</p>
            <Button>See more <IconMore style={{ marginLeft: 10 }} /></Button>
          </Content>
        </Col>
      </Row>
    </Container>
  </SectionWrapper>
)