import styled from "styled-components";
import {Link} from "react-router-dom";
import {BaseBox} from "../shared";

const StyledBottomBox = styled(BaseBox)`
  padding: 20px 0;
  text-align: center;
  a{
    margin-left: 5px; 
    font-weight:600;
    color:${(props) => props.theme.accent};
    
  }
`;
function BottomBox({message, link, linkText}){
    return (
        <StyledBottomBox>
            <span>{message}</span>
            <Link to={link}>{linkText}</Link>
        </StyledBottomBox>
    )
}

export default BottomBox;