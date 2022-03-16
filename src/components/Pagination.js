import styled from 'styled-components'

const StyledLink = styled.a`
    color: white;
    margin: 0 5px;
`

const Pagination = ({tracksLength, tracks, setTracksToRender}) => {

    const pages = new Array(Math.floor(tracksLength / 20)).fill(1)

    const changeTracksToRender = (page) => {
        const coef = 1 + page * 20
        setTracksToRender(tracks.slice(coef, coef + 20))
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        changeTracksToRender(e.target.href.split('3000/')[1])
    }

    return(
        <>
            {pages.map((e, i) => {
                return <StyledLink onClick={handleClick} href={i} key={i}> &lt;{i + 1}&gt; </StyledLink>
            })}
        </>
    )
}

export default Pagination