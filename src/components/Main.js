import styled from "styled-components"

const MainWrapper = styled.main`
    width: 1280px;
    margin: 0 auto;
    background-color: #282c34;
`


const Main = (props) => {
    return (
        <MainWrapper>
            { props.children }
        </MainWrapper>
    )
}

export default Main