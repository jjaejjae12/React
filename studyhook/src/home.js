import { Link } from "react-router-dom";    

export default function Home() {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <Link to={`/HookUseState`}>useState</Link>
            <Link to={`/HookUseInput`}>useInput</Link>
            <Link to={`/HookUseTabs`}>useTabs</Link>
            <Link to={`/HookUseEffect`}>useEffect</Link>
            <Link to={`/HookUseTitle`}>HookUseTitle</Link>
        </div>
    )
}
