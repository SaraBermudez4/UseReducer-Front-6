import { Button, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../actions/AuthAction'
import { AuthContext } from '../context/authContext'

const Login = () => {

    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        dispatch(login('Sara Bermudez'))
        navigate('/home')
    }

    return (
        <div>
            <Text fontSize='2xl'>Login</Text>
            <hr />
            <Button variant="outline" colorScheme="blue" type="submit" fontSize="20px" marginLeft="20px" onClick={handleLogin}>Login</Button>
        </div>
    )
}

export default Login