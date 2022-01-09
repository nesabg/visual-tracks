import React, { useState } from 'react'

export const TrackContext = React.createContext()

const TracksContextProvider = (props) => {

    const [tracks, setTracks] = useState([])
    const authCookie = document.cookie.length > 0 ? document.cookie.split('; ').find(e => e.includes('track-auth')).split('=')[1] : null

    const getData = async (e) => {

        try{
            const res = await fetch('http://localhost:3001/api/all', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authCookie}`
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

    return(
        <TrackContext.Provider value={{getData, tracks}}>
            {props.children}
        </TrackContext.Provider>
    )
}

export default TracksContextProvider