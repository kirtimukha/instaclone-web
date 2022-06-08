import { createGlobalStyle } from "styled-components";
//import reset from "styled-reset";

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightgray",
};

export const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c",
};
 /* // ${reset} */
export const GlobalStyles = createGlobalStyle`
  
    body {
        background-color: ${(props) => props.theme.bgColor};
    }
`;
