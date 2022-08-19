import React from "react";
import useRTQueriesCustom from "../hooks/useRTQueriesCustom";
import { useParams } from "react-router-dom";
const NewQueryPage = () => {
  const { heroId } = useParams();
  const { data, isLoading, isError, error } = useRTQueriesCustom(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return <div>{data?.name}</div>;
};

export default NewQueryPage;
