import styled from 'styled-components'

const SelectElement = styled.select`
    padding: 7px 10px;
    margin-right: 20px;
    font-size: 14px;
`

const Select = ({options, handleSelect}) => {

    return <>
        <SelectElement name="filterField" onChange={e => handleSelect(e.target.value)}>
            { options.map(e => { 
                return <option key={e} value={e.toLowerCase()}>{e}</option>
            })}
        </SelectElement>
    </>
}

export default Select