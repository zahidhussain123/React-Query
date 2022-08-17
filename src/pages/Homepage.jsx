import axios from "axios";
import React, { useEffect, useState } from "react";

function Homepage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    try {
      axios.get("http://localhost:4000/superheroes").then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setIsLoading(false);
        setIsError(false);
      });
    } catch (error) {
      setIsError(error.message);
    }
  }, []);

  if (isLoading) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </h1>
    );
  }

  if (isError) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isError}
      </h1>
    );
  }
  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        This is React Fetch Api using UseEffect
      </h2>
      {users?.map((user, key) => (
        <div
          key={key}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span> {user.id} </span> <br />
          <br />
          <span> {user.name} </span> <br />
          {/* <span>Phone : {user.phone}</span> <br /> */}
          {/* <span>Email : {user.email}</span> <br /> */}
          {/* <span>Website : {user.website}</span> <br /> <br /> */}
        </div>
      ))}
    </>
  );
}

export default Homepage;
