import { ROOT_URL } from "../constants/constants";


export const getTvShows = async (searchValue: string) => {
  const response = await fetch(
    `${ROOT_URL}/search/shows?q=${searchValue}`,
  );
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return response.json();
}

export const getTvShowDetails = async (tvshowId: string) => {
  const response = await fetch(
    `${ROOT_URL}/lookup/shows?imdb=${tvshowId}`,
  );
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return response.json();
}