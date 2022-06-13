import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Authlayout from "../components/auth/Authlayout";
import Button from "../components/auth/Button";
import Seperator from "../components/auth/Seperator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
import styled from "styled-components";
import {FatLink} from "../components/shared";
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
;`
const SubTitle= styled(FatLink)`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  line-height: 1.2;
`;

function Signup( ) {
    return (
        <Authlayout>
            <FormBox>
                <HeaderContainer>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                    <SubTitle>
                       Sign up to see photos and videos from your friends.
                    </SubTitle>
                </HeaderContainer>
                <form action="">
                    <Input type="email" name="" id="" placeholder="E-mail" />
                    <Input type="text" name="" id="" placeholder="Name" />
                    <Input type="text" name="" id="" placeholder="User Name" />
                    <Input type="password" name="" id="" placeholder="Password" />
                    <Button type="submit" name="" id="" value="Sign Up" />
                </form>
            </FormBox>
            <BottomBox
                message="Have an account?"
                linkText="Login In"
                link={routes.home}
            />
        </Authlayout>
    );
}

export default Signup;