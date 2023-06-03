import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((ret) => {
        setData(ret.data);
        console.log(ret.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const renderedData = data.map((el) => {
  //   return <div key={el.id}>{el.email}</div>;
  // });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.first_name}</td>
              <td>{el.last_name}</td>
              <td>{el.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
