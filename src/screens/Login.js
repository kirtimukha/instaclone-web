import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Authlayout from "../components/auth/Authlayout";
import Button from "../components/auth/Button";
import Seperator from "../components/auth/Seperator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";

const FacebookLogin = styled.div`
  color: #385285;
  font-weight: 500;
  span{margin-left:10px; font-weight: 600;}
`;

function Login( ) {
   return (
    <Authlayout>
        <FormBox>
           <div>
             <FontAwesomeIcon icon={faInstagram} size="3x" />
           </div>
           <form action="">
                <Input type="text" name="" id="" placeholder="User Name" />
                <Input type="password" name="" id="" placeholder="Password" />
             <Button type="submit" name="" id="" value="Log in" />
           </form>
           <Seperator />
           <FacebookLogin>
               <FontAwesomeIcon icon={faFacebookSquare} />
               <span>Login in with Facebook</span>
           </FacebookLogin>
        </FormBox>
        <BottomBox
            message="Don't Have an account?"
            linkText="Sing Up"
            link={routes.signUp}
        />
    </Authlayout>
  );
}

export default Login;