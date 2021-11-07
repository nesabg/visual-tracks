import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Heading from '../components/Heading'
import RenderTrack from '../components/RenderTrack'
import { UserContext } from '../context/UserContext'

const Button = styled.a`
    padding: 5px 10px;
    border: 1px solid white;
    color: white;
    font-size: 18px;
`


const Homepage = () => {

    const [tracks, setTracks] = useState([])
    const [render, setRender] = useState(false)
    const { isLogin } = useContext(UserContext)


    const a = document.cookie.split('; ').find(e => e.includes('track-auth')).split('=')[1]

    const getData = async (e) => {

        try{
            const res = await fetch('http://localhost:3001/api/all', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${a}`
                }
            })
            const data = await res.json()
            const ar = JSON.parse(data)

            const newArr = []
            ar.map(e => {
                if(newArr[e.ip] === undefined){
                    return newArr[e.ip] = [e];
                }else{
                    return newArr[e.ip].push(e)
                }
            })

            const finalData = Object.entries(newArr)

            setTracks(finalData)

        }catch(e){
            console.error(e) 
        }
    }

    const handleClick = (track) => {
        setRender(!render)
    }

    return (
        <div>
            <Heading title="Home page" />
            { isLogin ? <Button onClick={getData}>Get Data</Button> : <p>Please login ....</p>}
            { tracks.length > 0 ? tracks.map( e => {
                return <RenderTrack key={e[0]} track={e} /> 
            }) : null}
        </div>
    )
}

export default Homepage