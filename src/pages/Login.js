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


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const { login } = useContext(UserContext)

    const submitHandler = (e) => {
        e.preventDefault()
        login(email, password)
        history.push('/')
    }

    return (
        <div>
            <Heading title="Login page" />
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