import { useState } from 'react'
import generateRandomNumber from '../utils/generateRandomNumber'


function RandomNumber({ maxNum }) {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber(maxNum))
    const changeRandomNumber = () => {
    return setRandomNumber(generateRandomNumber(maxNum))
    }
    return (
        <div>
        <h1>{ randomNumber }</h1>
        <button onClick= { changeRandomNumber }>Generate new random number</button>
        </div>
    )
}
export default RandomNumber