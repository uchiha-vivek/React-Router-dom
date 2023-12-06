import { Outlet ,useSearchParams} from "react-router-dom"

export const Users = () =>{
    const [searchParams, setSearchparams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active'


    return (
        <>
        <div>
            <h1>User1</h1>
            <h1>User2</h1>
            <h1>User3</h1>
            <Outlet/>

            <div>
                <button onClick={()=> setSearchparams({filter:'active'})}>Active</button>
                <button onClick={() => setSearchparams({})}>reset</button>
            </div>
            {
                showActiveUsers? <h2>show active users</h2> :<h2> show all users</h2>
            }
        </div>
        </>
    )
}