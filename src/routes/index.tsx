import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Confirmation from '../pages/Confirmation';
import Details from '../pages/Details';


//
export const Router = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/confirmation" element={<Confirmation />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/detail/:id_loan" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
  