import { useState } from "react";

function BT2() {
  const [array, setArray] = useState(["Huynh", " nguyen"]);
  const [object, setObject] = useState({
    name: "huynh",
    age: 18,
  });

  return (
    <div>
      <h2>hello World {array}</h2>

      <h4>
        {object.name} , {object.age}
      </h4>
    </div>
  );
}

export default BT2;
