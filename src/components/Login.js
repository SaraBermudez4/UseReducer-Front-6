import { Button, Text } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
    return (
        <div>
            <Text fontSize='2xl'>Login</Text>
            <hr />
            <Button variant="outline" colorScheme="blue" type="submit" fontSize="20px" marginLeft="20px">Login</Button>
        </div>
    )
}

export default Login