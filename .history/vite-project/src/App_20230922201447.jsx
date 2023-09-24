import "./App.css";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import { useState } from "react";

function Main(props) {
  console.log(props);

  const [isLogin, setLogin] = useState(false);

  const onLogout = () => {
    setLogin(false);
  };

  const onLogin = () => {
    setLogin(true);
  };
  return isLogin ? (
    (<main>this is navbars</main>)(<button onClick={onLogout}>login</button>)
  ) : (
    <button onClick={onLogin}> login</button>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
