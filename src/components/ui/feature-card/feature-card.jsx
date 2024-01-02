import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  StyledFeatureCard,
  StyledFeatureCardHeader,
  StyledFeatureCardText,
  StyledFeatureCardImage,
  StyledOwner,
} from "./styles";

// Карточка
function FeatureCard({
  title, // название особенности
  owner, // владелец особенности (обычный магазин, фермерский)
  about, // описание особенности
  isNegative, // является ли особенность отрицательной
  image, // иконка
  className,
}) {
  return (
    <StyledFeatureCard isNegative={isNegative} className={className}>
      <StyledFeatureCardHeader>
        <StyledFeatureCardImage
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <StyledOwner isNegative={isNegative}>{owner}</StyledOwner>
          <Title level={TitleLevel.H3} size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </StyledFeatureCardHeader>
      <StyledFeatureCardText dangerouslySetInnerHTML={{ __html: about }} />
    </StyledFeatureCard>
  );
}

export default FeatureCard;
