import React from 'react';
import Header from "./components/Header/Header";
import SponsoredLinks from "./components/Sponsored/SponsoredLinks";
import SocialLinks from "./components/Social/SocialLinks";
import UsefulLinks from "./components/UsefulLinks";


function BaseLayout() {
  return (
    <>
        <Header />
        <SponsoredLinks />
        <SocialLinks />
    </>
  );
}
export default BaseLayout;
