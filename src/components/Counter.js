import { Button } from '@chakra-ui/react'
import React, { useReducer } from 'react'
import { CounterReducer, init, initialState } from '../reducers/CounterReducer'
import { types } from '../types/types'

const Counter = () => {

    const [counter, dispatch] = useReducer(CounterReducer, initialState, init)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Button colorScheme="green" onClick={() => dispatch({ type: types.increment })}>
                Incrementar</Button>
            <Button colorScheme="green" onClick={() => dispatch({ type: types.decrement })}>Decrementar</Button>
            <Button colorScheme="green" onClick={() => dispatch({ type: types.reset })}>Reset</Button>
        </div>
    )
}

export default Counter
