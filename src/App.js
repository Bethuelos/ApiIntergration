
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/user/Login";
import AddUser from "./pages/user/AddUser";


function App() {
  // console.log(process.env.REACT_APP_API_SERVER_DISTANT)
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="login" element={<LoginForm />}></Route>
        <Route path="addUser" element={<AddUser />}></Route>
      </Routes>
    </>
  );
}

export default App;
