import { useEffect, useState } from "react";

const useNetwork = onChange => {
    const [status, setSatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine)
        }
        setSatus(navigator.onLine)
    }
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("Offline", handleChange);
        };
    }, [])
    return status;
}

export default function HookUseNetwork() {
    const handelNetworkChange = (online) => console.log(online ? "We are online" : "We are offline")
    const onLine = useNetwork(handelNetworkChange)
    return (
        <div>
            {onLine ? "Online" : "Offline"}
        </div>
    )
}