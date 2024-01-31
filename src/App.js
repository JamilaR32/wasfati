import logo from "./logo.svg";
import "./index.css";
import { useEffect, useState } from "react";
import { getToken } from "./api/storage";
import Usercontext from "./context/Usercontext";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";

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
      <div>
        <Navbar />
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <Outlet />
      </div>
    </Usercontext.Provider>
  );
}

export default App;
