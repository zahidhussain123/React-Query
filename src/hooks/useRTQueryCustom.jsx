import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useRTQueryCustom(onError, onSuccess) {
  return useQuery(
    ["superheroes"],
    () => {
      return axios
        .get("http://localhost:4000/superheroes")
        .then((res) => res.data);
    },
    {
      onError,
      onSuccess,
    }
  );
}

export default useRTQueryCustom;
