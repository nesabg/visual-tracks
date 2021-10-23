import React from 'react'
import styled from 'styled-components'

const FormButton = styled.button`
    margin: 10px 0;
    padding: 5px 20px;
    background-color: transparent;
    color: white;
    border: 1px solid white;
`

const Button = ({ type, name}) => {
    return(
        <>
            <FormButton type={type}>{name}</FormButton>
        </>
    )
}

export default Button