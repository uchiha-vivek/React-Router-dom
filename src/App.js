import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import { Error } from './Components/Error.js';
// import { Navbar } from './Components/Navbar';    
 
import Order from './Components/Order.js';
import { Products } from './Components/Products.js';
import { Header } from './Components/Header.js';
import Genre from './Components/Genre.js';
import Trending from './Components/Trending.js';
import { Users } from './Components/Users.js';
import { UserDetail } from './Components/UserDetail.js';
import {Admin} from './Components/Admin.js'
import { Profile } from './Components/Profile.js';
import { SecureProvider } from './Components/Security.js';
import Login from './Components/Login.js';
import ReqAuth from './Components/ReqAuth.js';
 

function App() {
  return ( 
    <>

    <SecureProvider> 

    {/* <Header/> */}
    <Header/>
    
      <Routes>


        <Route path='/' element={<Home/>}> </Route>
        <Route path='about' element={<About/>}> </Route>
        <Route path='order' element={<Order/>}/>
        <Route path='products' element={<Products/>}>
          {/* child component within parent component. */}
          <Route index  element={<Genre/>}/>

          <Route path='genres' element={<Genre/>}/>
          <Route path='trending' element={<Trending/>}/>




          </Route>
          <Route path='users' element={<Users/>}>

            {/* nested routing */}
            {/* specific routing is more given more importance than dynamic routing. */}

          <Route path=':userId' element={<UserDetail/>}/>
          <Route path='admin' element={<Admin/>}/>
          {/* <Route path='users/1' element={<UserDetail/>}/> */}




          </Route>



        <Route path='profile' element={<ReqAuth><Profile/></ReqAuth> }/>   
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>


        

      </Routes>
      </SecureProvider>


    </>
  );
}

export default App;
