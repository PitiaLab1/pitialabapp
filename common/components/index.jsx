import styled from "styled-components/native";
import { theme } from "../styles";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.background[3]};
  color: ${theme.colors.text[1]};
`;

export const HDiv = styled.View`
  width: 100%;
  height: ${(props) => props.h || "fit-content"};
  display: flex;
  background-color: ${(props) => props.bg || "transparent"};
  padding: ${(props) => props.p || "0px"};
  color: ${theme.colors.text[1]};
  border: 1px solid ${(props) => props.borderColor || "transparent"};
  padding: ${(props) => props.p || "0px"};
  flex-direction: row;
  align-items: ${(props) => (props.$center ? "center" : "initial")};
  justify-content: ${(props) => (props.$center ? "center" : "initial")};
`;

export const VDiv = styled.View`
  width: 100%;
  height: ${(props) => props.h || "fit-content"};
  display: flex;
  background-color: ${(props) => props.bg || "transparent"};
  padding: ${(props) => props.p || "0px"};
  color: ${theme.colors.text[1]};
  flex-direction: column;
  align-items: ${(props) => (props.$center ? "center" : "initial")};
  justify-content: ${(props) => (props.$center ? "center" : "initial")};
`;

export const Image = styled.Image`
  width: ${(props) => props.w || props.size || "50px"};
  height: ${(props) => props.h || props.size || "50px"};
  object-fit: cover;
`;

export const Text = styled.Text`
  color: ${(props) =>
    props.$secondary ? theme.colors.background[3] : theme.colors.text[1]};
  font-weight: ${(props) => (props.$bold ? "700" : "500")};
  font-size: ${(props) => props.size || "16px"};
  text-align: ${(props) => props.textAlign || "center"};
  margin: ${props => props.m || "0"};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.primary[2]};
  color: ${theme.colors.background[3]};
  width: ${(props) => props.w || "100%"};
  height: ${(props) => props.h || "fit-content"};
  padding: ${(props) => props.p || "0px"};
  border-radius: ${(props) => props.radius || "0px"};
`;
