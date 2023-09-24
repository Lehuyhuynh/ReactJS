import "./App.css";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import { useState } from "react";

function Main(props) {
  console.log(props);

  const [isLogin, setLogin] = useState(false);
  const onLogin = () => {
    console.log(222, isLogin);
    setLogin(true);
  };
  return isLogin ? (
    (<main>this is navbars</main>)(<button onClick={onLogin}>login</button>)
  ) : (
    <button> login</button>
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
