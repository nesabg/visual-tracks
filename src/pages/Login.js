import React, { useContext, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import styled from 'styled-components'

import Button from '../components/Button'
import Heading from '../components/Heading'
import Input from '../components/Input'
import { UserContext } from '../context/UserContext'

const RedirectToLogin = styled.div`
    a {
        color: white !important;
    }
    color: white;
`
const Danger = styled.div`
    color: red;
    margin-top: -10px;
    font-size: 14px;
`   


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const history = useHistory()

    const { login } = useContext(UserContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const status = await login(email, password)
        status ? history.push('/') : setError(true)
    }

    return (
        <div>
            <Heading title="Login page" />
            { error ? <Danger>Username or password are inccorect</Danger> : null }
            <form onSubmit={submitHandler}> 
                <Input type="text" label="Email address" id="email" handler={setEmail}/>
                <Input type="password" label="Password" id="password" handler={setPassword}/>
                <Button type="submit" name="Login"/>
            </form>
            <RedirectToLogin>
                <span>If you don`t have account regiter </span>
                <Link to="/register" >Here</Link>
            </RedirectToLogin>
        </div>
)
}

export default Login