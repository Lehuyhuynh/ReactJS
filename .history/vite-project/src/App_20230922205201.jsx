import "./App.css";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Main from "./assets/Main";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const onloginClick = () => {
    console.log("onloginClick");
    setIsLogin(true);
  };

  const onlogoutClick = () => {
    console.log("onloginClick");
    setIsLogin(false);
  };
  return (
    <div>
      <Header
        isLogined={isLogin}
        onLogin={onloginClick}
        onLogout={onlogoutClick}
      />
      <Main />
      <Footer></Footer>
    </div>
  );
}

export default App;
