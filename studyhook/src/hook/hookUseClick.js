import { useEffect, useRef } from "react"
//useRef = getElementById

const useClick = (onClick) => {
    const element = useRef()
    useEffect(() => {
        if(typeof onClick !== "function") {
            return;
        }
        if (element.current) {
            element.current.addEventListener("click", onClick)
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick)
            }
        }
    },[])
    return typeof onClick !== "function" ? element : undefined;
}

export default function HookUseClick() {
    const sayHello = () => console.log("say hello")
    const title = useClick(sayHello);
    return (
        <div>
            <h1 ref={title} >Hi</h1>
        </div>
    )
}