function BT2() {
  const name1 = [huynh, nguyen, trung];
  const object1 = {
    name: "huynh",
    age: 18,
  };
  return render();
}

function render() {
  return (
    <table>
      <tr>
        <th>Tên </th>
        <th>Tuổi</th>
      </tr>
      <tr>
        <td>{name1}</td>
        <td></td>
      </tr>
      <tr>
        <td>{object1.name}</td>
        <td>{object1.age}</td>
      </tr>
    </table>
  );
}
export default BT2;
