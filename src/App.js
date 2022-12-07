import "./App.css";
import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/userProfile/UserProfile";
import NotificationBar from "./components/notificationBar/NotificationBar";
import SubscribePage from "./components/subscribePage/SubscribePage";
import PaymentPage from "./components/paymentPage/PaymentPage";
import AdminPage from "./Admin/AdminPage/AdminPage";

function App() {
  return (
    <div className="App">
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
