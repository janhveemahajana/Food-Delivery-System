import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginForm from "./components/Registration&Login/LoginForm";
import RegisterForm from "./components/Registration&Login/RegisterForm";
import UserDashboard from "./pages/Dashboards/UserDashBoard/UserDashboard";
import OwnerDashboard from "./pages/Dashboards/OwnerDashboard/OwnerDashboard";
import DeliveryDashboard from "./pages/Dashboards/DeliveryDashboard/DeliveryDashboard";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        
        {/* Single Login & Registration Pages */}
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />

        {/* Dashboards */}
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/owner-dashboard" element={<OwnerDashboard/>} />
        <Route path="/delivery-dashboard" element={<DeliveryDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
