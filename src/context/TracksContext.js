import React, { useState } from 'react'

export const TrackContext = React.createContext()

const TracksContextProvider = (props) => {
    const [rawData, setRawData] = useState([])
    const [tracks, setTracks] = useState([])
    const [tracksToRender, setTracksToRender] = useState([])

    const authCookie = document.cookie.length > 0 ? document.cookie.split('; ').find(e => e.includes('track-auth')).split('=')[1] : null   

    const formatData = (arr) => {
        const newArr = []
        arr.map(e => {
            if(newArr[e.ip] === undefined){
                return newArr[e.ip] = [e];
            }else{
                return newArr[e.ip].push(e)
            }
        })

        const finalData = Object.entries(newArr)

        setTracks(finalData)
        setTracksToRender(tracks.slice(0, 10))
    }

    const getData = async () => {
        try{
            const res = await fetch('http://localhost:3001/api/all', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authCookie}`
                }
            })
            const data = await res.json()

            setRawData(JSON.parse(data))

            formatData(rawData)

        }catch(e){
            console.error('Err from try/catch', e);
        
        }
    }

    const deleteTrack = async (id) => {
        try{

            setRawData(p => rawData.filter(t => t._id !== id))            
            formatData(rawData)
            
            await fetch(`http://localhost:3001/api/delete/${id}`,{
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${authCookie}`
                }
            })
            
        } catch(e){
            console.error(e)
        }

    }

    const changeTracksToRender = (page) => {
        const coef = page * 20
        setTracksToRender(tracks.slice(coef, coef + 10))
    }

    return(
        <TrackContext.Provider value={{getData, tracks, tracksToRender, changeTracksToRender, setTracksToRender, deleteTrack}}>
            {props.children}
        </TrackContext.Provider>
    )
}

export default TracksContextProvider