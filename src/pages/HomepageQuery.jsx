import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const HomepageQuery = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["superheros"],
    () => {
      return axios
        .get("http://localhost:4000/superheroes")
        .then((res) => res.data);
    },
    {
      refetchOnMount: false, //refetching from the server ....if keep it true it will make request to fetch data and if keep false then it wont fetch
      refetchOnWindowFocus: "always", //if anything changes at the background or from server then it will automatically update the require data without any need of refresh
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

  if (isLoading) {
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
