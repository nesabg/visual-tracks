import React from 'react'
import styled from 'styled-components'

const FormatParagraph = styled.div`
    color: white;
    border: 1px solid red;
    margin-left: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Title = styled.h2`
    color: aqua;
`

const RenderTrack = ({ track }) =>{

    return (
        <>
            <Title>{track[0]}</Title>
            {track[1].map(e => {
                return <FormatParagraph key={e._id}>
                     <div>
                         <div>{e.os}</div>
                         <div>{e.date}</div>
                         <div>{e.browser}</div>
                    </div> 
                     <div>{e.documentTitle}</div>
                </FormatParagraph>
            })}
        </>
    )
} 

export default RenderTrack