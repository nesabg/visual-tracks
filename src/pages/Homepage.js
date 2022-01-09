import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Heading from '../components/Heading'
import Pagination from '../components/Pagination'
import RenderTrack from '../components/RenderTrack'
import { TrackContext } from '../context/TracksContext'
import { UserContext } from '../context/UserContext'

const Button = styled.a`
    display: block;
    width: max-content;
    padding: 5px 10px;
    margin: 20px 0;
    border: 1px solid white;
    color: white;
    font-size: 18px;
    cursor: pointer;
`


const Homepage = () => {

    const { isLogin } = useContext(UserContext)
    const { getData, tracks } = useContext(TrackContext)



    return (
        <div>
            <Heading title="Home page" />
            { isLogin ? <Button onClick={getData}>Get Data</Button> : <p>Please login ....</p>}
            {/* { tracks.length > 0 ?  <Pagination tracks={tracks.length} /> : null}     */}
            <hr/>
            <Pagination tracks={tracks.length} />
        </div>
    )
}

export default Homepage

            /* { isLogin ? <Button onClick={getData}>Get Data</Button> : <p>Please login ....</p>}
            { tracks.length > 0 ? tracks.map( e => {
                return <RenderTrack key={e[0]} track={e} /> 
            }) : null} */