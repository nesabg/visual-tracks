import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";

import Button from '../components/Button'
import Input from '../components/Input'
import { UserContext } from '../context/UserContext'


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
            <h1>Login page</h1>
            <form onSubmit={submitHandler}> 
                <Input type="text" label="Email address" id="email" handler={setEmail}/>
                <Input type="password" label="Password" id="password" handler={setPassword}/>
                <Button type="submit" name="Login"/>
            </form>
        </div>
)
}

export default Login