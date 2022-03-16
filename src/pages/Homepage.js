import React, { useContext, useEffect, useState } from 'react'
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

const LoginMessage = styled.div`
    color: white;
`

const Homepage = () => {

    const [tracksToRender, setTracksToRender] = useState([])
    const [tracks, setTracks] = useState([])

    const { isLogin } = useContext(UserContext)
    const { getData, rawData } = useContext(TrackContext)

    useEffect(() => {
       if(!isLogin){
            setTracksToRender([])
        }else{
            tracks.length > 0 ? setTracksToRender(tracks.slice(0, 20)) : setTracksToRender([])
        }
    },[isLogin, tracks])

    useEffect(() => {
        formatData(rawData)
    },[rawData])

    const formatData = (arr) => {

    const formatedArray = arr.reduce((acc, e) => {
        acc[e.ip] === undefined ? acc[e.ip] = [e] : acc[e.ip].push(e)
        return acc
    },[])
    
    const finalData = Object.entries(formatedArray)
    finalData.sort((a, b) => a[0].localeCompare(b[0]))

    setTracks(prevState => finalData)
}

   return (
        <div>
            <Heading title="Home page" />
            { isLogin ? <Button onClick={getData}>Get Data</Button> : <LoginMessage>Please login ....</LoginMessage>}
            <hr/>
            <div>
                {tracksToRender.map((track) => {
                    return <RenderTrack track={track} key={track[0]}/>
                })}
            </div>
            {isLogin ? <Pagination tracksLength={tracks.length} tracks={tracks} setTracksToRender={setTracksToRender} /> : null }
        </div>
    )
}

export default Homepage
