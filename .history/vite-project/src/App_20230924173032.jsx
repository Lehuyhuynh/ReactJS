import "./App.css";
import BTH1 from "./Bai8/BTH1";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Main from "./assets/Main";
import BT1 from "./Bai8/BT1";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const onLoginClick = () => {
    setIsLogin(true);
  };
  const onLogoutClick = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <div>
        <BTH1></BTH1>
        <BT1></BT1>
      </div>
      return của app :{" "}
      <Header
        isLogined={isLogin}
        onLogin={onLoginClick}
        onLogout={onLogoutClick}
      />
      <Main />
      <Footer></Footer>
    </div>
  );
}

export default App;
