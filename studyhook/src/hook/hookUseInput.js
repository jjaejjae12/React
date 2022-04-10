import { useState } from "react"

const useInput = (initialValue) => {
    const [value,setValue] = useState(initialValue);
    const onChange = (event) => {
        console.log(event.target)
    }
    return {value,onChange}//{value} = {value:value};
}

export default function HookUseInput() {
    const name = useInput("Mr.");
    return (
        <div>
            <h1>Hello</h1>
            <input placeholder="Name" {...name}/>{/* Spread Operator  {...name} = value = {name.value} onChange = {name.onChange} */}
        </div>
    )
}