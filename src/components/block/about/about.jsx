import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledAbout, AboutText } from "./styles";

function About({ level }) {
  return (
    <StyledAbout>
      <Title level={level} size={TitleSize.BIG}>
        Магазин фермерских продуктов с доставкой
      </Title>
      <AboutText>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </AboutText>
    </StyledAbout>
  );
}

export default About;
