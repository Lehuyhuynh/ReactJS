import { useState } from "react";

function BT2() {
  const [array, setArray] = useState(["Huynh", " nguyen"]);
  const [object, setObject] = useState({
    name: "huynh",
    age: 18,
  });

  return (
    <div>
      <h1>hello World {array}</h1>

      <h4>{object}</h4>
    </div>
  );
}

export default BT2;
