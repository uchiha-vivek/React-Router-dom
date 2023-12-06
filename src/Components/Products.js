import {Link,Outlet} from 'react-router-dom'

export const Products = () =>{


    return (

        <>
        
        <div>
            <input type='search'  placeholder="search-products"/>
        </div>
        <nav>
            <Link to='trending'>Trending</Link>
            <Link to='genres'>Genres</Link>
        </nav>
        <Outlet/>


         
        </>
    )
}