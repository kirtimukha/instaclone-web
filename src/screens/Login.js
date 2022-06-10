import { useState } from 'react';
import {darkModeVar, isLoggedInVar} from './../apollo';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';


const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
display:flex;
height: 100vh;
justify-content: center;
align-items: center;
-ms-flex-direction: column;
flex-direction: column;
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
margin-bottom: 10px;
form{
  margin-top:35px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  input{
    width: 100%;
    border-radius: 3px;
    padding: 7px;
    background-color: #fafafa;
    border: 0.5px solid rgba(219,219,219);
    margin-top: 5px;

    &::placeholder{
      font-size: 12px;
    }
    &:last-child{
      border:none;
      margin-top: 12px;
      background-color: #0095f0;
      color: white;
      text-align: center;
      padding: 8px 0px;
      font-weight: 600;
      
    }
  }
}
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0;
  text-align: center;
  a{
    font-weight:600;
    color:#0095f6;
  }
`;
const Wrapper = styled.div`
    max-width: 350px;
    width: 100%;
`;

const Seperator = styled.div`
    margin:20px 0 30px 0;
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
    span{
      margin: 0px 10px; 
      font-weight: 600;
      color:#8e8e8e;
    }
`;

const FacebookLogin = styled.div`
  color: #385285;
  font-weight: 500;
  span{margin-left:10px; font-weight: 600;}
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
                <span>Or</span>
                <div></div>
           </Seperator>
           <FacebookLogin>
               <FontAwesomeIcon icon={faFacebookSquare} />
               <span>Login in with Facebook</span>
           </FacebookLogin>
         </TopBox>  
        <BottomBox>
          <span>Don't have an account?</span>    <a href="#">Sign up</a>
        </BottomBox>  
       </Wrapper>      
    </Container>
  );
}

export default Login;