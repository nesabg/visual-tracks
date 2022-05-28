import React, { useContext } from 'react';
import Image from '../components/Image';
import { UserContext } from '../context/UserContext';

const Profile = () =>{

    const { avatarUrl, email} = useContext(UserContext)

    return <>
            <h1>{email}</h1>
            <Image src={avatarUrl} alt={`Avatar image of profile ${email}`} width='200px' borderRadius='30px' />
        </>
    
    
}

export default Profile;