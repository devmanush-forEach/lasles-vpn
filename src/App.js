import "./App.css";
import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/userProfile/UserProfile";
<<<<<<< HEAD
import NotificationBar from "./components/notificationBar/NotificationBar";
import Navbar from "./components/navbar/Navbar";
=======
>>>>>>> 86cdc3382d62d5e6c73aeb99c0985c80cf0161b8

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
<<<<<<< HEAD
      <NotificationBar />
=======
>>>>>>> 86cdc3382d62d5e6c73aeb99c0985c80cf0161b8
    </div>
  );
}

export default App;
