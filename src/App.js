import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import {
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RightBar from "./components/rightBar/RightBar";
import LeftBar from './components/leftBar/LeftBar';

function App() {

  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        {!currentUser ? <Navigate to="/login"/> :
       <> <Navbar />
        <div style={{ display: 'flex'}}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
        </>
        }
      </div>
    )
  }

  return (
    
      <div >
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/" 
            element={<Layout />} 
          >
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
                    
          </Route>    
      </Routes>
      </div>
   
  );
}

export default App;
