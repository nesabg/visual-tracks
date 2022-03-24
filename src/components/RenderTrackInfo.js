import { useContext } from 'react'
import styled from 'styled-components'
import { TrackContext } from '../context/TracksContext'

const FormatParagraph = styled.div`
color: white;
border: 1px solid #fff;
padding: 10px 5px;
margin-left: 20px;
display: grid;
grid-template-columns: 3fr 3fr 1fr;

div:nth-child(1) {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
}

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

const RenderTrackInfo = ({info}) => {

    const { deleteTrack } = useContext(TrackContext)

    const handleDelete = (id) => {
        if(window.confirm('Are you sure want to delete this item?')) {
            deleteTrack(id)   
        }
    }   
    
    return (<>
        {info.map(e => {
            if(e.crds !== null){
                
            }
            console.log(e.crds)
            return <FormatParagraph key={e._id}>
                    <div>
                        <div>{e.os}</div>
                        <div>{e.date}</div>
                        <div>{e.browser}</div>

                    </div> 
                <div>
                    <p>{e.documentTitle}</p>
                    { e.crds !== null ?                             
                        <a href={`http://www.google.com/maps/place/${e.crds.split("-")[0]},${e.crds.split("-")[1]}`} rel="noreferrer" target="_blank">Position</a> : 
                    null}
                </div>
                <span onClick={ (a, _id) => handleDelete(e._id)}>Delete</span>
            </FormatParagraph>
        })}
    </>)
}

export default RenderTrackInfo