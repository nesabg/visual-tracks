import React from 'react'
import styled from 'styled-components'

const InputField = styled.input`
    padding: 4px 16px;
`
const Label = styled.label`
    color: red;
    margin: 0 20px;
`

const Input = ({ type, label, id, handler }) => {

    return (
        <>  
            <Label htmlFor={id}>{ label }</Label>
            <InputField type={type} id={id} onChange={e => handler(e.target.value)} />
        </>
    ) 
}

export default Input    