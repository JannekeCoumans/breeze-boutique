import React from 'react';
import { FeaturedCollectionBanner, HomeViewAbout, HomeViewHeader, HomeViewNewIn, HomeViewProductSlider, HomeViewCollections } from 'config/C4';

const HomeView = () => {
  return (
    <div className="homeView">
      <HomeViewHeader />
      <HomeViewAbout />
      <FeaturedCollectionBanner />
      <HomeViewProductSlider />
      <HomeViewCollections />
      <HomeViewNewIn />
    </div>
  )
}

export default HomeView;