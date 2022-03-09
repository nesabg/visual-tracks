import styled from 'styled-components'

const RenderTrackInfo = ({info}) => {

    const FormatParagraph = styled.div`
        color: white;
        border: 1px solid #fff;
        padding: 10px 5px;
        margin-left: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    `
    
    return (<>
        {info.map(e => {
            return <FormatParagraph key={e._id}>
                    <div>
                        <div>{e.os}</div>
                        <div>{e.date}</div>
                        <div>{e.browser}</div>
                </div> 
                    <div>{e.documentTitle}</div>
            </FormatParagraph>
        })}
    </>)
}

export default RenderTrackInfo