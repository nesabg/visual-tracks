import styled from "styled-components"

const ImageWrapper = styled.div`
    width: ${props => props.width};
    border-radius: ${props => props.borderRadius};
    overflow: hidden;

    img {
        width: 100%;
    }
`


const Image = ({src, alt, width, borderRadius}) => {
    return (
        <ImageWrapper width={width} borderRadius={borderRadius}>
            <img src={src} alt={alt} />
        </ImageWrapper>
    )
}

export default Image