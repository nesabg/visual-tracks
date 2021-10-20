import React, { useState } from 'react'

export const UserContext = React.createContext()

const UserContextProvider = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState('')

    const login = (email, password) => {

        const body = JSON.stringify({email, password})

        console.log('From context', body)

        fetch(`http://localhost:3001/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(e => console.log(e))
    }

    const register = (email, password) => {
        fetch(`http://localhost:3001/api/user/register`, {
            method: 'POST',
            'content-type': 'application/json',
            body: JSON.stringify(email, password)
        }).then(res => console.log(res))
    }

    return(
        <UserContext.Provider value={{email, password, auth, login, register}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider