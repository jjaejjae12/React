import { useEffect, useState } from "react"

const useBeforLeave = (onBefore) => {
    // if (typeof onBefore !== "function") {
    //     return;
    // }
    const handel = (event) => {
        const {clientY} = event;
        if(clientY <= 0) {
            onBefore();
        }
    }
    useEffect(() => {
        document.addEventListener("mouseleave",handel)
        return (
            () => document.removeEventListener("mouseleave",handel)
            )
    },[])
}

export default function HookUseBeforLeave() {
    const begForLife = () => console.log("Pls don`t leave")
    useBeforLeave(begForLife)
    return (
        <div>
            <h1>h1</h1>
        </div>
    )
}