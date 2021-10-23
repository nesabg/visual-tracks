import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import Button from '../components/Button'
import Input from '../components/Input'
import ValidateField from '../components/ValidateField'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'
import Heading from '../components/Heading'

const Danger = styled.div`
    color: red;
    margin-top: -10px;
    font-size: 14px;
`   

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [error, setError] = useState(null)

    const history = useHistory()

    const { register } = useContext(UserContext)

    const submitHandler = async (e) => {
        e.preventDefault()

        const result = await register(email, password)

        if(result){
            setError(result)
        }else{
            setError(null)
            history.push('/login')
        }
    }  

    return (
        <div>
            <Heading title="Register page" />

            {error !== null ? <Danger>{error}</Danger> : null }

            <form onSubmit={submitHandler}> 
                <Input type="text" label="Email address" id="email" handler={setEmail}/>
                <ValidateField type="email" value={email} />

                <Input type="password" label="Password" id="password" handler={setPassword}/>
                <ValidateField type="password" value={password} />

                <Input type="password" label="Repeat password" id="rePassword" handler={setRePassword}/>
                { password !==  rePassword ? rePassword !== '' ? <Danger> Repeated password are not equal to password </Danger> :null : null }

                <Button type="submit" name="Register"/>
            </form>
        </div>
    )
}

export default Register