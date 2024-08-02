import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import BeSaudi from "./pages/Besaudi";
import LiveSaudi from "./pages/Livesaudi";
import Gallary from "./pages/Gallary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar";
import { getCurrentUser } from "./services/auth.service";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/besaudi" element={<BeSaudi />} />
        <Route path="/livesaudi" element={<LiveSaudi />} />
        <Route path="/gallary" element={<Gallary />} />
      </Routes>
    </div>
  );
}

export default App;
