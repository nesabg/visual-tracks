import React, { useState } from 'react'

export const UserContext = React.createContext()

const UserContextProvider = (props) => {

    const [email, setEmail] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const login = async (email, password) => {

           try{
                const response = await fetch(`http://localhost:3001/api/user/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email, password})
                })

                if(response.status !== 403){
                    const token = await response.json()

                    setEmail(email)
                    setIsLogin(true)
                    
                    document.cookie = `track-auth=${token}`
                }

            }catch(e){
                console.error(e)
            }
    }

    const register = async (email, password) => {
        const body = JSON.stringify({email, password})

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

    return(
        <UserContext.Provider value={{email, isLogin, login, register}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider