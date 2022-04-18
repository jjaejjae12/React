
const useNotification = (title, options) => {
    if (!("Notification") in window) {
        return;
    }
    const firNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, options)
                } else {
                    return;
                }
            })
        } else {
            new Notification(title, options)
        }
    }
    return firNotif;

}

export default function HookUseNotification() {
    const triggerNotif = useNotification("Can I steal your kimchi?" , {body:"I love kimchi don`t you"})
    return (
        <div>
            <button onClick={triggerNotif} >Hello</button>
        </div>
    )
}