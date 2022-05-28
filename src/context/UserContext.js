import React, { useState, useEffect } from 'react'

export const UserContext = React.createContext()

const UserContextProvider = (props) => {

    const [email, setEmail] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('email') !== null){
            setEmail(localStorage.getItem('email'))
            setIsLogin(true)
        }
    },[])

    const login = async (email, password) => {

           try{
                const response = await fetch(`http://localhost:3001/api/user/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email, password})
                })

                if(response.status === 403){
                    return false
                } else {
                    const token = await response.json()

                    setEmail(email)
                    localStorage.setItem('email', email)
                    setIsLogin(true)
                    
                    document.cookie = `track-auth=${token}`
                    return true
                }              

            }catch(e){
                console.error(e)

            }
    }

    const register = async (email, password, avatarUrl) => {
        const body = JSON.stringify({email, password, avatarUrl})

        try{
            const response = await fetch(`http://localhost:3001/api/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            })

            if(response.status === 403){
                const data = await response.json()
                return data
            }
          
        }catch(e){
            console.error(e)
         }
    }

    const logout = () => {
        document.cookie = 'track-auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        setIsLogin(false)
        setEmail('')
        localStorage.removeItem('email')
    }

    return(
        <UserContext.Provider value={{email, isLogin, login, register, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider