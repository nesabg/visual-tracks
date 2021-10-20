import React, { useState } from 'react'
    import Button from '../components/Button'
    import Input from '../components/Input'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log({email, password, rePassword})
    }

    return (
        <div>
            <h1>Register page</h1>
            <form onSubmit={submitHandler}> 
                <Input type="text" label="Email address" id="email" handler={setEmail}/>
                <Input type="password" label="Password" id="password" handler={setPassword}/>
                <Input type="password" label="Repeat password" id="rePassword" handler={setRePassword}/>

                <Button type="submit" name="Register"/>
            </form>
        </div>
    )
}

export default Register