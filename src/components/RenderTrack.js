import React from 'react'
import styled from 'styled-components'

const RenderTrack = ({ track }) =>{

    const FormatParagraph = styled.p`
        color: white;
        border: 1px solid red;
        margin-left: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    `
    const Title = styled.h2`
        color: aqua;
    `

    console.log(track)

    return (
        <>
            <Title>{track[0]}</Title>
            {track[1].map(e => {
                return <FormatParagraph key={e._id}>
                     <span>{e.date} - </span> <span>{e.documentTitle}</span>
                </FormatParagraph>
            })}
        </>
    )
} 

export default RenderTrack