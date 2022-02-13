import React, { useContext } from 'react'
import styled from 'styled-components'
import { TrackContext } from '../context/TracksContext'

const StyledLink = styled.a`
    color: white;
    margin: 0 5px;
`

const Pagination = ({tracks}) => {

    const pages = new Array(Math.floor(tracks / 20)).fill(1)
    const { changeTracksToRender } = useContext(TrackContext);

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