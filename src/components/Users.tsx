import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData]: any = useState();
  const [mode, setMode] = useState("online");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => {
        response.json().then((result: any) => {
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((error) => {
        setMode("offline");
        let collection: any = localStorage.getItem("users");
        setData(JSON.parse(collection));
      });
  }, []);

  return (
    <div>
      <div>
        {mode === "offline" ? <div>You are in offline Mode</div> : null}
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item: any, index: any) => (
              <tr key={index}>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td>{item?.username}</td>
                <td>{item?.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
