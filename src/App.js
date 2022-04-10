import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Sidebar/Dashboard";
import User from "./components/Sidebar/User";
import Userdetail from "./components/Sidebar/Userdetail";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
           <Route path="/" element={<Dashboard />} />
           <Route path="/users" element={<User />}/>
           <Route path="/userdetail" element={<Userdetail/>}/> 
          <Route path="*" element={<> not found</>} />  
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
