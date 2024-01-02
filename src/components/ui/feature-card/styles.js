import styled from "styled-components";

export const StyledFeatureCard = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: #e1edce;
  box-sizing: border-box;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
`;

export const StyledFeatureCardHeader = styled.header`
  display: flex;
  margin-bottom: 20px;
  text-align: left;
`;

export const StyledFeatureCardImage = styled.img`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: 20px;
`;

export const StyledFeatureCardText = styled.p`
  padding: 0;
  margin: 0;
  text-align: left;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 25px;
`;

export const StyledOwner = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => (props.isNegative ? "#f75531" : "#88aa4d")};
`;
