import React, { useState } from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
    color: white;
    margin: 0 5px;
`

const Pagination = ({tracks}) => {

    const pages = new Array(Math.floor(tracks / 10)).fill(1)

    return(
        <>
            {pages.map((e, i) => {
                return <StyledLink href={i} key={i}> &lt;{i + 1}&gt; </StyledLink>
            })}
        </>
    )
}

export default Pagination