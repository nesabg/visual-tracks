import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { validation } from '../utils/validations'

const Danger = styled.div`
    color: red;
    margin-top: -10px;
    font-size: 14px;
`   

const ValidateField = ({ type, value }) => {

    const [error, setError] = useState({err: false})

    const valid = (type, value) => {
        if(value !== ''){
            setError(validation(type, value))
        }else{
            setError({err: false})
        }
    }

    useEffect(() => {
        valid(type, value)
    }, [value, type])

    return (
        <>
            { error.err ? <Danger>{ error.message}</Danger> : null }
        </>
    )
}

export default ValidateField