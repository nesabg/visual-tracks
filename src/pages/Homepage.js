import React, { useContext } from 'react'
import styled from 'styled-components'
import Heading from '../components/Heading'
import { UserContext } from '../context/UserContext'

const Button = styled.a`
    padding: 5px 10px;
    border: 1px solid white;
    color: white;
    font-size: 18px;
`

const Homepage = () => {
    const { isLogin } = useContext(UserContext)

    const a = document.cookie.split('; ').find(e => e.includes('track-auth')).split('=')[1]

    const getData = async (e) => {

        try{
            const res = await fetch('http://localhost:3001/api/all',{
                headers: {
                    Authorization: `Bearer ${a}`
                }
            })
            const data = await res.json()

            console.log(data)
        }catch(e){
            console.error(e)
        }
    }

    return (
        <div>
            <Heading title="Home page" />
            { isLogin ? <Button onClick={getData}>Get Data</Button> : <p>Please login ....</p>}
        </div>
    )
}

export default Homepage