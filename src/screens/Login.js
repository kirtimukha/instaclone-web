import { useState } from 'react';
import {darkModeVar, isLoggedInVar} from './../apollo';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
display:flex;
height: 100vh;
justify-content: center;
align-items: center;
-ms-flex-direction: column;
flex-direction: column;
`;
const Wrapper = styled.div`
max-width: 350px;
width: 100%;
`;
const WhiteBox = styled.div`
background-color: white;
border: 1px solid rgb(219, 219, 219);
width:100%;

`;

const TopBox = styled(WhiteBox)`
display: flex;
justify-content: center;
align-items: center;
-ms-flex-direction: column;
flex-direction: column;
padding: 35px 40px 20px 40px;

form{
  margin-top:32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input{
    width: 100%;
    border-radius: 3px;
    padding: 7px;
    border: 0.5px solid rgba(219,219,219);
    background-color: #fafafa;
    margin-top: 5px;

    &:last-child{
      border:none;
      margin-top: 12px;
      background-color: #0095f0;
      color: white;
      text-align: center;
      padding: 5px 0;
      font-weight: 500;
    }
  }
}
`;

const BottomBox = styled(WhiteBox)`
  padding: 10px 0;
  text-align: center;
`;

const Seperator = styled.div`
margin:10px 0;
text-transform: uppercase;
display: flex;
justify-content: center;
width: 100%;
align-items: center;
  div{
    width: 100%;
    height: 1px;
    background-color: rgb(219,219,219);
  }
  span{margin: 15px 10px 20px 0; color:#8e8e8e;}
`;
function Login( ) {
   return (
    <Container>
       <Wrapper>
        <TopBox>
           <div>
             <FontAwesomeIcon icon={faInstagram} size="3x" />
           </div>
           <form action="">
             <input type="text" name="" id="" placeholder="Username" />
             <input type="password" name="" id="" placeholder="Password" />
             <input type="submit" name="" id="" value="Log in" />
           </form>
           <Seperator>
             <div></div>
             Or
             <div></div>
           </Seperator>
           <span>Login in with Facebook</span>
         </TopBox>  
        <BottomBox>
          <span>Don't have an account?</span>    <a href="#">Sign up</a>
        </BottomBox>  
       </Wrapper>      
    </Container>
  );
}

export default Login;