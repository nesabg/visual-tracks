import React from 'react'
import styled from 'styled-components'

const InputField = styled.input`
    width: 300px;
    padding: 6px 2px;
    display: block;
`
const Label = styled.label`
    display: block;
    color: #fff;
`
const InputWrapper = styled.div`
    margin: 10px 0;
`

const Input = ({ type, label, id, handler }) => {

    return (
        <>  
            <InputWrapper>
                <Label htmlFor={id}>{ label }</Label>
                <InputField type={type} id={id} onChange={e => handler(e.target.value)} />
            </InputWrapper>
        </>
    ) 
}

export default Input    