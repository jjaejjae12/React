import { useState } from "react"

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        /*const value = event.target.value */
        let willUdate = true;
        if (typeof validator === "function") {
            willUdate = validator(value);
        }
        if (willUdate) {
            setValue(value);
        };
    };
    return { value, onChange };//{value} = {value:value};
};

export default function HookUseInput() {
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Mr.", maxLen);
    return (
        <div>
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />{/* Spread Operator  {...name} = value = {name.value} onChange = {name.onChange} */}
            {/* <input placeholder="Email" {...email} /> */}
        </div>
    )
}