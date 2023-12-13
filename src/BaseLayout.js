import React from 'react';
import Header from "./components/Header/Header";
import SponsoredLinks from "./components/Sponsored/SponsoredLinks";
import SocialLinks from "./components/SocialLinks";
import UsefulLinks from "./components/UsefulLinks";


function BaseLayout() {
  return (
    <div>
        <Header />
        <SponsoredLinks />
    </div>
  );
}
export default BaseLayout;
