import { useContext } from 'react'
import styled from 'styled-components'
import { TrackContext } from '../context/TracksContext'

import Icon from './Icon'

const FormatParagraph = styled.div`
color: white;
border: 1px solid #fff;
padding: 10px 5px;
margin-left: 20px;
display: grid;
grid-template-columns: 3fr 3fr 1fr;

a {
    color: #faf;
    text-decoration: none;
}

span {
    width: 50%;
    height: 25px;
    color: white;
    text-align: center;
    background-color: red;
    border-radius: 10px;
    padding: 2px 8px;
    display: inline-block;
    cursor: pointer;
}
`
const BasicInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
`

const OsIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const RenderTrackInfo = ({info}) => {

    const { deleteTrack } = useContext(TrackContext)

    const handleDelete = (id) => {
        if(window.confirm('Are you sure want to delete this item?')) {
            deleteTrack(id)   
        }
    }   
    
    return (<>
        {info.map(e => {
            return <FormatParagraph key={e._id}>
                <BasicInfoWrapper>
                    <OsIconWrapper><Icon type={e.os}/></OsIconWrapper>
                    <div>{e.date}</div>
                    <div>{e.browser}</div>
                </BasicInfoWrapper> 
                <div>
                    <p>{e.documentTitle}</p>
                    { e.crds ?                             
                        <a href={`http://www.google.com/maps/place/${e.crds.split("-")[0]},${e.crds.split("-")[1]}`} rel="noreferrer" target="_blank">Position</a> : 
                    null}
                </div>
                <span onClick={ (a, _id) => handleDelete(e._id)}>Delete</span>
            </FormatParagraph>
        })}
    </>)
}

export default RenderTrackInfo