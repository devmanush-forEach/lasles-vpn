import "./App.css";
import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/userProfile/UserProfile";
import NotificationBar from "./components/notificationBar/NotificationBar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <NotificationBar />
    </div>
  );
}

export default App;
