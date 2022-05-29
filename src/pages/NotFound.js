import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`
const NotFound = () =>{

    return (
        <Wrapper>  
            <h1>404 not found</h1>
        </Wrapper>
    )
}

export default NotFound