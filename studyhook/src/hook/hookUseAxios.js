import useAxios from "./useAxiosfile";

export default function HookUseAxios() {
    const {loading,error,data, refetch} = useAxios({url:"https://yts.mx/api/v2/list_movies.json"});
    console.log(`Loading:${loading}\nError:${error}\nData:${JSON.stringify(data)}`)
    return (
        <div>
            <h1>{data && data.status}</h1>
            <h2>{loading &&  "Loading" }</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}