import React, { useState } from 'react'
import styled from 'styled-components'

import RenderTrackInfo from './RenderTrackInfo'

const Title = styled.h2`
    color: aqua;
`

const ToggleBtn = styled.div`
    width: 30px;
    height: 30px;
    line-height: 20px;
    background-color: red;
    color: white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;

    span {
        display: inline-block;
        margin-top: -5px;
    }
`

const Wrapper = styled.div`
    padding: 5px 15px;
    display: grid;
    align-items: center;
    grid-template-columns: 90% 10%;
    border:1px solid #fff;
`

const RenderTrack = ({ track }) =>{
    const [isShow, setisShow] = useState(false)
    const [toggleBtnContent, setToggleBtnContent] = useState('+')

    const toggleShow = () => {
        setisShow(!isShow)
        setToggleBtnContent(prev => prev === '+' ? setToggleBtnContent('-') : setToggleBtnContent('+'))
    }

    return (
        <>
            <Wrapper>            
                <Title onClick={toggleShow}>{track[0]}</Title>
                <ToggleBtn onClick={toggleShow}><span>{ toggleBtnContent }</span></ToggleBtn>
            </Wrapper>
            {isShow ? <RenderTrackInfo info={track[1]}/> : null }
        </>
    )
} 

export default RenderTrack