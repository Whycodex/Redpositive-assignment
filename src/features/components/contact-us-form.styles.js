import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../assets/background.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 16px;
  margin-top: 4px;
`;

export const AuthButton = styled(Button).attrs({
  color: 'red',
})`
  padding: 4px;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;
