import styled from "styled-components";
import { isLoggedInVar } from './../apollo';
import { useState } from 'react';


//Title 은 react 컴포넌트이기 때문에 props를 받는다.
const Title = styled.h1`
  color: ${(props) => (props.potato? "white" : "black")};
  background-color:${props => props.potato? "red" : "violet"};
  padding: 1rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
const Container = styled.div`
`;

const TogglePotato = styled.button`
  color: tomato;
`;

function Login( ) {
  const [potato, setPotato] = useState(false);
  const togglePotato = () => setPotato((current) => !current); 
  return (
    <Container>
      <Title potato={potato}>Login</Title>
      <button onClick={() => isLoggedInVar(true)}>Log in Now!</button>
      <TogglePotato onClick={togglePotato}>Toggle Potato</TogglePotato>
    </Container>
  );
}

// const Login = () => <h1>Login</h1>; 으로 사용할 수도 있다. funtion 대신@

export default Login;