import React from 'react';
import styled from 'styled-components';

import HeroSection from '../../components/HeroSection';
import FeatureSection from '../../components/FeatureSection';
import ExploreSection from '../../components/ExploreSection';
import CollectionSection from '../../components/CollectionSection';
import Footer from '../../components/Footer';

export default class extends React.Component {
  render() {
    return (
      <div>
        <HeroSection />
        <FeatureSection />
        <ExploreSection />
        <CollectionSection />
        <Footer />
      </div>
    );
  }
}