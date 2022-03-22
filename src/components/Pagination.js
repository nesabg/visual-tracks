import styled from 'styled-components'

const StyledLink = styled.a`
    color: white;
    margin: 0 5px;
`

const Pagination = ({filteredTracks, setPage}) => {

    const pages = new Array(Math.floor(filteredTracks.length / 20)).fill(1)

  
    const handleClick = (e) => {
        e.preventDefault()
        setPage(Number(e.target.href.split('3000/')[1]))
    }

    return(
        <>
            {pages.map((_, i) => {
                return <StyledLink onClick={handleClick} href={i} key={i}> &lt;{i + 1}&gt; </StyledLink>
            })}
        </>
    )
}

export default Pagination