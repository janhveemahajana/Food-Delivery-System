import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RegisterForm from "./components/Registration&Login/RegisterForm";
// import UserDashboard from "./pages/Dashboards/UserDashBoard/UserDashboard";
// import OwnerDashboard from "./pages/Dashboards/OwnerDashboard/OwnerDashboard";
// import DeliveryDashboard from "./pages/Dashboards/DeliveryDashboard/DeliveryDashboard";
// import LoginForm from "./components/Registration&Login/LoginForm";
import { UserDashboardPage } from "./pages/Dashboards/UserDashBoard/UserDashboardPage";
import LoginCustomer from "./components/Login/Userlogin";
import LoginOwner from "./components/Login/Ownerlogin";
import LoginDelivery from "./components/Login/Deliverylogin";
import { OwnerDashboardPage } from "./pages/Dashboards/OwnerDashboard/OwnerDashboardPage";
import { DeliveryDashboardPage } from "./pages/Dashboards/DeliveryDashboard/DeliveryDashboardPage";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        
        {/* Single Login & Registration Pages */}
        {/* <Route path="/login" element={<LoginForm/>} /> */}
        <Route path="/register" element={<RegisterForm/>} />

        {/* Dashboards */}
        {/* <Route path="/user-dashboard" element={<UserDashboard/>} /> */}
        <Route path="/user-dashboardpage" element={<UserDashboardPage/>} />
        {/* <Route path="/owner-dashboard" element={<OwnerDashboard/>} /> */}
        <Route path="/owner-dashboardpage" element={<OwnerDashboardPage/>} />
        {/* <Route path="/delivery-dashboard" element={<DeliveryDashboard/>} /> */}
        <Route path="/delivery-dashboardpage" element={<DeliveryDashboardPage/>} />

        <Route path="/login-customer" element={<LoginCustomer/> } />
        <Route path="/login-owner" element={<LoginOwner/> } />
        <Route path="/login-delivery" element={<LoginDelivery/> } />
      </Routes>
    </Router>
  );
}

export default App;
