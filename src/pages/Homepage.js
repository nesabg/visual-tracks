import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Heading from '../components/Heading'
import Pagination from '../components/Pagination'
import RenderTrack from '../components/RenderTrack'
import Input from '../components/Input'
import Select from '../components/Select'

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

    const [tracks, setTracks] = useState([])
    const [filteredTracks, setFilteredTracks] = useState([])
    const [inputFilter, setInputFilter] = useState('')
    const [page, setPage] = useState(0)
    const [numberOfTracksToShow, setNumberOfTracksToShow] = useState(10)
    const [filterField, setFilterField] = useState('date')

    const { isLogin } = useContext(UserContext)
    const { getData, rawData } = useContext(TrackContext)

    useEffect(() => {
        formatData(rawData)
    },[rawData])

    useEffect(() =>{
        setFilteredTracks(tracks
            .map(e => {
                let innerFiltered = e[1].filter(i => i[filterField] !== null ? i[filterField].toLowerCase().includes(inputFilter) : undefined)
                if(innerFiltered.length === 0){
                    return undefined
                }
                return [e[0], innerFiltered]})
            .filter(t=> t !== undefined))
    },[tracks, inputFilter, filterField])

    const formatData = (arr) => {
        const formatedArray = arr.reduce((acc, e) => {
            acc[e.ip] === undefined ? acc[e.ip] = [e] : acc[e.ip].push(e)
            return acc
        },[])
        
        const finalData = Object.entries(formatedArray)
        finalData.sort((a, b) => a[0].localeCompare(b[0]))

        setTracks(prevState => finalData)
    }

    const coef = () => 1 + page * numberOfTracksToShow

   return (
        <div>
            <Heading title="Home page" />
            { isLogin ? <Button onClick={getData}>Get Data</Button> : <LoginMessage>Please login ....</LoginMessage>}
            <hr/>
            <hr/>
            { isLogin ?
            <>            
                <Select handleSelect={setFilterField} options={['Date', 'Os', 'Browser', 'IP' ]}/>
                <Input type="text" label="Filter tracks" id="filter" handler={setInputFilter}/>
           
            <div>
                { filteredTracks
                    .slice(coef(), coef() + numberOfTracksToShow)
                    .map((track) => {
                        return <RenderTrack track={track} key={track[0]}/>
                    })}
            </div>
            </>    
            : null }
            {isLogin ? <Pagination filteredTracks={filteredTracks} setPage={setPage} /> : null }
        </div>
    )
}

export default Homepage