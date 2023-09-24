import "./App.css";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Main from "./assets/Main";

function App() {
  const onloginClick = () => {
    console.log("onloginClick");
  };
  return (
    <div>
      <Header isLogined={isLogin} onLogin={onloginClick} />
      <Main />
      <Footer></Footer>
    </div>
  );
}

export default App;
