import { useState } from "react";

function BT2() {
  const [name1, setName1] = useState(["Huynh", "nguyen"]);

  const object1 = {
    name: "huynh",
    age: 18,
  };
  return <h1>hello World {name1}</h1>;
}

export default BT2;
