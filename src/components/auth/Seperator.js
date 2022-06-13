import styled from "styled-components";

const StyledSeperator = styled.div`
    margin:20px 0;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    div{
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.borderColor};
    }
    span{
      margin: 0px 10px; 
      font-size: 12px;
      font-weight: 600;
      color:#8e8e8e;
    }
`;



function Seperator (){
 return(
    <StyledSeperator>
        <div></div>
        <span>Or</span>
        <div></div>
    </StyledSeperator>
    )
}

export default Seperator;