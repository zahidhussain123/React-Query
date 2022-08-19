import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const HomepageQuery = () => {
  const onSuccess = (data) => {
    console.log("This is the success api request", data);
  };

  const onError = (error) => {
    console.log("This is the error api request", error);
  };
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["superheros"],
    () => {
      return axios
        .get("http://localhost:4000/superheroes")
        .then((res) => res.data);
    },
    {
      onSuccess,
      onError,
      select: (data) => {
        const superheroData = data.map((hero) => hero.name);
        return superheroData;
      },
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
      {/* {data?.map((user) => (
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
      ))} */}

      {data.map((user) => {
        return <h2>{user}</h2>;
      })}
    </>
  );
};

export default HomepageQuery;
