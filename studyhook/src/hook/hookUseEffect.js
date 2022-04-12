import { useEffect, useState } from "react"

export default function HookUseEffect() {
    const sayHello = () => console.log("hello")
    const [number,setNumber] = useState(1)
    const [aNumber,setAnumber] = useState(1)
    useEffect(sayHello,[number])//ComponentDidMount,ConmponentWillUnMount,ComponentDidUpdate  
    return (
        <div>
            <div>Hi</div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setNumber(aNumber + 1)}>{aNumber}</button>
        </div>
    )
}