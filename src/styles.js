import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouterasRouter } from 'react-router-dom';

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightgray",
};

export const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input{ all:unset; box-sizing: border-box;}
    * {box-sizing: border-box; }
    body {
        background-color: #fafafa;
    }
`;
