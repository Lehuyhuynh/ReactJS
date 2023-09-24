import { useState } from "react";
function Header(props) {
  console.log(props);

  const handleLogout = () => {
    props.onLogined();
  };

  const handleLogin = () => {
    props.onLogout();
  };
  return props.isLogined ? (
    <header>
      this is navbars <button onClick={handleLogout}>login</button>
    </header>
  ) : (
    <button onClick={handleLogout}> login</button>
  );
}
export default Header;
