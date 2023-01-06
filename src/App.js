import "./App.css";
import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./pages/userProfile/UserProfile";
import NotificationBar from "./components/notificationBar/NotificationBar";
import SubscribePage from "./pages/subscribePage/SubscribePage";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import AdminPage from "./pages/Admin/AdminPage/AdminPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/paymentPage" element={<PaymentPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
      </Routes>
      <NotificationBar />
    </div>
  );
}

export default App;
