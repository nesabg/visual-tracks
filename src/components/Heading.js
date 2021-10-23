import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: white;
    font-size: 36px;
    text-align: center;
`

const Heading = ({ title }) => {
    return (
        <>
            <Title>{title}</Title>
        </>
    )
}

export default Heading