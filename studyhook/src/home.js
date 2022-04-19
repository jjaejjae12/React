import { Link } from "react-router-dom";    

export default function Home() {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <Link to={`/HookUseState`}>useState</Link>
            <Link to={`/HookUseInput`}>useInput</Link>
            <Link to={`/HookUseTabs`}>useTabs</Link>
            <Link to={`/HookUseEffect`}>useEffect</Link>
            <Link to={`/HookUseTitle`}>HookUseTitle</Link>
            <Link to={`/HookUseClick`}>HookUseClick</Link>
            <Link to={`/HookUsePreventLeave`}>HookUsePreventLeave</Link>
            <Link to={`/HookUseConfirm`}>HookUseConfirm</Link>
            <Link to={`/HookUseBeforLeave`}>HookUseBeforLeave</Link>
            <Link to={`/HookUseFadeIn`}>HookUseFadeIn</Link>
            <Link to={`/HookUseNetwork`}>HookUseNetwork</Link>
            <Link to={`/HookUseScroll`}>HookUseScroll</Link>
            <Link to={`/HookUseFullScreen`}>HookUseFullScreen</Link>
            <Link to={`/HookUseNotification`}>HookUseNotification</Link>
            <Link to={`/HookUseAxios`}>HookUseAxios</Link>
        </div>
    )
}

