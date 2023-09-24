import { useState } from "react";
function Header(props) {
  console.log(props);

  const [isLogin, setLogin] = useState(false);

  const onLogout = () => {
    setLogin(false);
  };

  const props.onLogin = () => {
    setLogin(true);
  };
  return props.isLogined ? (
    <header>
      this is navbars <button onClick={onLogout}>login</button>
    </header>
  ) : (
    <button onClick={onLogin}> login</button>
  );
}
export default Header;
