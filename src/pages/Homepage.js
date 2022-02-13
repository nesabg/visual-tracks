import React, { useContext, useEffect } from 'react'
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
    const { getData, tracks, tracksToRender, setTracksToRender } = useContext(TrackContext)

   useEffect(() => {
       if(!isLogin){
            setTracksToRender([])
        }
   },[isLogin, setTracksToRender])

   return (
        <div>
            <Heading title="Home page" />
            { isLogin ? <Button onClick={getData}>Get Data</Button> : <p>Please login ....</p>}
            <hr/>
            <div>
                {tracksToRender.map((track, i) => {
                    return <RenderTrack track={track} key={i}/>
                })}
            </div>
            {isLogin ? <Pagination tracks={tracks.length} /> : null }
        </div>
    )
}

export default Homepage
