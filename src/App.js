import "./index.css";
import { useEffect, useState } from "react";
import { getToken } from "./api/storage";
import Usercontext from "./context/Usercontext";
import Navbar from "./component/Navbar";
import { Outlet, useLocation } from "react-router-dom";

import bg1 from "./assets/bg-w.png";
import bg2 from "./assets/bg-w2.png";
import bg3 from "./assets/bg-w3.png";
import Sidebar from "./component/Sidebar";

function App() {
  const [user, setUser] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(true);
    }
  }, []);

  let theImage = "";

  if (location.pathname.includes("signup")) {
    theImage = bg2;
  } else if (location.pathname.includes("")) {
    theImage = bg1;
  } else if (location.pathname.includes("recipe")) {
    theImage = bg3;
  }

  return (
    <Usercontext.Provider value={[user, setUser]}>
      <div className="w-screen h-screen relative ">
        <img className=" h-screen w-screen absolute z-[-2]" src={theImage} />

        <div className="absolute">
          <Navbar />
          {/* <Sidebar /> */}
          <Outlet />
        </div>
      </div>
      {/* <div className="w-screen h-screen bg-red-500 justify-center items-center flex">
        <div className="w-[300px] h-[300px] bg-green-500 justify-center items-center flex relative z-[1] ">
          <div className="w-full h-full bg-yellow-500 z-[3]"></div>
          <div className="w-[150px] h-[150px] bg-blue-500  absolute top-[-70px] right-[-70px] z-[2]">
            <div className="text-[30px]">1</div>
          </div>
        </div>
      </div> */}
    </Usercontext.Provider>
  );
}

export default App;
