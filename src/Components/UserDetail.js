import { useParams } from "react-router-dom"

export const UserDetail = ()=>{
    const params= useParams()
    const userId = params.userId 
    console.log(`hello ${userId}`)
    {/* from app.js :userId // dynamic routing */}


    return(
        <>
        <div>

        Details about user {userId}

        </div>
        </>
    )
}