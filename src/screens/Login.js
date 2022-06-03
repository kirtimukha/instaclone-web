/* import { useState } from "react"; */
import styled from "styled-components";


const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;
const Container = styled.div``;

/* const TogglePotato = styled.button`
  color: red;
`; */

function Login() {
  /* const [potato, setPotato] = useState(false);
  const togglePotato = () => setPotato((current) => !current); */
  return (
    <Container>
      <Title>Login</Title>
    </Container>
  );
}

// const Login = () => <h1>Login</h1>; 으로 사용할 수도 있다. funtion 대신@

export default Login;