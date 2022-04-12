import { useEffect, useState } from "react"

const useTitle =(initialTitle) => {
    const [title,setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title")
        htmlTitle.innerText = title;
    }; 
    useEffect(updateTitle,[title])
    return {title,setTitle};
};

export default function HookUseTitle() {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater.setTitle("Home"), 5000);
    return (
        <div>
            {titleUpdater.title}
        </div>
    )
}