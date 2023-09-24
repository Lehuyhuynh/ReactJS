import "./App.css";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Main from "./assets/Main";
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
