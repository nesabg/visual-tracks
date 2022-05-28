import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import Button from '../components/Button'
import Input from '../components/Input'
import ValidateField from '../components/ValidateField'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'
import Heading from '../components/Heading'
import { Link } from 'react-router-dom'

const Danger = styled.div`
    color: red;
    margin-top: -10px;
    font-size: 14px;
`   
const RedirectToLogin = styled.div`
    a {
        color: white !important;
    }
    color: white;
`

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [picture, setPicture] = useState('')
    const [error, setError] = useState(null)

    const history = useHistory()

    const { register } = useContext(UserContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        if(picture === ''){
            alert('Please select picture')
            return
        }

        const data = new FormData()
        data.append('file', picture)
        data.append('upload_preset', 'userAvatar')
        data.append('cloud_name', 'de9lhvwsc')

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/de9lhvwsc/image/upload', {
                    method: 'post',
                    body: data
                })
            const resData = await response.json()
            
            const result = await register(email, password, resData.url)

            if(result){
                setError(result)
            }else{
                setError(null)
                history.push('/login')
            }
        }catch(e){
            console.log(e)
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

                <input type="file" label="Upload Avatar" id="upload" onChange={e => setPicture(e.target.files[0])} />

                <Button type="submit" name="Register" />
            </form>

            <RedirectToLogin>
                <span>If you have account login </span>
                <Link to="/login" >Here</Link>
            </RedirectToLogin>
        </div>
    )
}

export default Register