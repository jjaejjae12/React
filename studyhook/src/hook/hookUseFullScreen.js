import { useRef } from "react"

const useFullScreen = (callback) => {
    const element = useRef()
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen()
        }
        if(typeof callback === "function") {
            callback(true)
        }
    }
    const exitFull = () => {
        document.exitFullscreen()
        if(typeof callback === "function") {
            callback(false)
        }
    }
    return { element, triggerFull, exitFull };
}

export default function HookUseFullScreen() {
    const onFulls = (isFull) => {
        console.log( isFull ? "We are full" : "We are small ")
    }
    const { element, triggerFull ,exitFull} = useFullScreen(onFulls)
    return (
        <div>
            <div ref={element} >
                <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" />
            <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    )
}