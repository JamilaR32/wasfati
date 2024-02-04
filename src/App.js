import logo from "./logo.svg";
import "./index.css";
import { useEffect, useState } from "react";
import { getToken } from "./api/storage";
import Usercontext from "./context/Usercontext";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./component/Sidebar";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(true);
    }
  }, []);
  return (
    <Usercontext.Provider value={[user, setUser]}>
      <Navbar />
      <Sidebar />
      <Outlet />
    </Usercontext.Provider>
  );
}

export default App;
