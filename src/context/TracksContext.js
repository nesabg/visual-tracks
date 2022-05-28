import React, { useState } from 'react'

export const TrackContext = React.createContext()

const TracksContextProvider = (props) => {
    
    const [rawData, setRawData] = useState([])

    const authCookie = document.cookie.length > 0 ? document.cookie.split('; ').find(e => e.includes('track-auth')).split('=')[1] : null   

    const getData = async () => {

        console.log(authCookie)

        try{
            const res = await fetch('http://localhost:3001/api/all', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authCookie}`
                }
            })

            const data = await res.json()
            const parsedData = JSON.parse(data)

            setRawData(parsedData)
        }catch(e){
            console.error('Err from try/catch', e);
        }
        
    }


    const deleteTrack = (id) => {
        setRawData(prevState => prevState.filter(t => t._id !== id))   
        try{          
            fetch(`http://localhost:3001/api/delete/${id}`,{
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${authCookie}`
                }
            })            
        }catch(e){
            console.error(e)
        }      
    }

    return(
        <TrackContext.Provider value={{getData, rawData, deleteTrack, }}>
            {props.children}
        </TrackContext.Provider>
    )
}

export default TracksContextProvider