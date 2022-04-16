import { useEffect, useState } from "react"

const useScroll = () => {
    const [state,setState] = useState({
        x : 0,
        y : 0
    });
    const onscroll = (event) => {
        setState({y:window.scrollY,x:window.scrollX})
    }
    useEffect(() => {
        window.addEventListener("scroll",onscroll)
        return () => window.removeEventListener("scroll",onscroll)
    }, [])
    return state
};

export default function HookUseScroll() {
    const {y} = useScroll()
    return (
        <div style={{height:"1000vh"}}>
            <h1 style={{position:"fixed",color: y > 100 ? "red" : "blue"}}>Hi</h1>
        </div>
    )
}