import "./App.css";
import Header from "./assets/Header";
import Footer from "./assets/Footer";

// function App() {
//   let i = 1;
//   const e1 = <h1>hello world</h1>;
//   const e2 = <h1>false</h1>;
//   // return (
//   //   <h1>{i==1 ? "hello world " : "flase"}</h1>
//   // )

//   return i === 1 ? e1 : e2;
// }

function App() {
  return (
    <div>
      <Header />

      <Footer></Footer>
    </div>
  );
}

export default App;
