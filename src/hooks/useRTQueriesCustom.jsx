import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchHeroId = (heroId) => {
  return axios
    .get(`http://localhost:4000/superheroes/${heroId}`)
    .then((res) => res.data);
};

const useRTQueriesCustom = (heroId) => {
  return useQuery(["superhero ", heroId], () => fetchHeroId(heroId));
};

export default useRTQueriesCustom;
