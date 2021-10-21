import React, { useState } from 'react'

export const UserContext = React.createContext()

const UserContextProvider = (props) => {

    const [email, setEmail] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const login = async (email, password) => {

        const body = JSON.stringify({email, password})

        try{
            const respone = await fetch(`http://localhost:3001/api/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            })
            const token = await respone.json()

            setEmail(email)
            setIsLogin(true)
            
            document.cookie = `track-auth=${token}`

            }catch(e){
                console.error(e)
            }
    }

    const register = (email, password) => {
        fetch(`http://localhost:3001/api/user/register`, {
            method: 'POST',
            'content-type': 'application/json',
            body: JSON.stringify(email, password)
        }).then(res => console.log(res))
    }

    return(
        <UserContext.Provider value={{email, isLogin, login, register}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider