import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cars from "./components/Cars";
import Motors from "./components/Motors";
import { Route, Routes } from "react-router-dom";
import Trucks from "./components/Truck";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignUp></SignUp>}>
            {" "}
          </Route>
          <Route path="/cars" element={<Cars></Cars>}>
            {" "}
          </Route>
          <Route path="/motors" element={<Motors></Motors>}>
            {" "}
          </Route>
          <Route path="/trucks" element={<Trucks></Trucks>}>
            {" "}
          </Route>
          <Route path="/login" element={<LogIn></LogIn>}>
            {" "}
          </Route>
          <Route path="/signup" element={<SignUp></SignUp>}>
            {" "}
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
