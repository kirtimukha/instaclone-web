import { useState } from 'react';
import {darkModeVar, isLoggedInVar} from './../apollo';
import styled from "styled-components";

//Title 은 react 컴포넌트이기 때문에 props를 받는다.
const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};   
`;
/*color: ${(props) => (props.potato? "white" : "black")};
    ${(props) => props.potato ? css` font-size: 49px; ` : css` text-decoration: underline; `}
    background-color:${(props) => props.potato? "red" : "#82e6ee"};
    padding: 1rem;
    font-weight: 400;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;*/

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;

const TogglePotato = styled.button`
  color: blueviolet;
`;

function Login( ) {
  const [potato, setPotato] = useState(false);
  const togglePotato = () => setPotato((current) => !current); 
  return (
    <Container>
      <Title potato={potato}>Login</Title>
      <button onClick={() => isLoggedInVar(true)}>Log in Now!</button>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To Light</button>
      <TogglePotato onClick={togglePotato}>Toggle Potato</TogglePotato>
    </Container>
  );
}

// const Login = () => <h1>Login</h1>; 으로 사용할 수도 있다. function 대신

export default Login;