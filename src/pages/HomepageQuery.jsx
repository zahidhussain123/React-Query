import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const HomepageQuery = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ["superheros"],
    () => {
      return axios
        .get("http://localhost:4000/superheroes")
        .then((res) => res.data);
    },
    {
      enabled: false,
    }
  );
  console.log({ isLoading, isFetching });

  if (isError) {
    return (
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error.message}
      </h2>
    );
  }

  if (isLoading && isFetching) {
    return (
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </h2>
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
        This is React Fetch Api using React Query
      </h2>
      <button onClick={refetch}>Refetching</button>
      {data?.map((user) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div key={user.id}>
            {user.id}
            <span>{user.name}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomepageQuery;
