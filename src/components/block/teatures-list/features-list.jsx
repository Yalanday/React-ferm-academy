import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import {
  StyledFeatures,
  StyledFeaturesList,
  StyledFeaturesItem,
} from "./styles";

// список преимуществ
function FeaturesList({ features, level, className }) {
  return features && features.length ? (
    <StyledFeatures className={className}>
      <Title level={level}>Почему фермерские продукты лучше?</Title>
      <StyledFeaturesList>
        {features.map((feature) => (
          <StyledFeaturesItem key={feature.id}>
            <FeatureCard {...feature} />
          </StyledFeaturesItem>
        ))}
      </StyledFeaturesList>
      <Button>Купить</Button>
    </StyledFeatures>
  ) : null;
}

export default FeaturesList;
