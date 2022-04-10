import { useState } from "react"

export default function HookUseState() {
    const [item, setItem] = useState(0);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);    
    return (
        <div>
            <h1>Hello {item}</h1>
            <h2>Start editing to see some magic happen</h2>
            <button onClick={incrementItem}>IncrementItem</button>
            <button onClick={decrementItem}>DecrementItem</button>
        </div>
    )
}
