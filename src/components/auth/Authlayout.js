import styled from "styled-components";

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


function Authlayout({children}) {
    return(
    <Container>
        <Wrapper>{children}</Wrapper>
    </Container>
    );
}

export default Authlayout;