
import styled from "styled-components";

const StyledFormError = styled.div`

color: tomato;
font-weight: bold;
font-size:10px;
margin-top: 5px;
margin-bottom: 10px;
text-align: left;width:100%;
padding-left:5px;
`;

function FormError({ message }) {
    return (
        message === "" || !message ?
            null : <StyledFormError>{message}</StyledFormError> 
    )
}
export default FormError