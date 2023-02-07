

import Profile from "./pages/profile/Profile";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  return (

    <Router>
 
    
      <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/profile" element={ <Profile/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path = "/register" element={<Register />} />
      </Routes>

  </Router>
   

  )
}

export default App;
