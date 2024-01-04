import React from 'react';
import Header from "./components/Header/Header";
import SponsoredLinks from "./components/Sponsored/SponsoredLinks";
import SocialLinks from "./components/Social/SocialLinks";
import UsefulLinks from "./components/UsefulLinks";

function BaseLayout() {

  const commonContainerStyles = {
    padding: "50px"
  };


  return (
    <div style={commonContainerStyles}>
        <Header />
        <SponsoredLinks />
        <SocialLinks />
    </div>
  );
}
export default BaseLayout;
