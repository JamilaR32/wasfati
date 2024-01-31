import logo from "./logo.svg";
<<<<<<< HEAD
import "./App.css";
<<<<<<< HEAD

function App() {
  return <h1>hii</h1>;
=======
=======
import "./index.css";
>>>>>>> 2ed7992 (tailwind)
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
>>>>>>> 51d1a34 (LoginDana)
}

export default App;
