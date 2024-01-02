import React from "react";
import About from "/src/components/block/about/about";
import FeaturesList from "/src/components/block/teatures-list/features-list";

function MainPage({ features }) {
  return (
    <>
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
