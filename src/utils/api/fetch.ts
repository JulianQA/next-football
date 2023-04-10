const URL_API = "https://v3.football.api-sports.io/";
const key: string = process.env.REACT_APP_API_KEY as string;

export const fetchApi = async (
  endpoint: string,
  parameters: string
): Promise<RootObject> => {
  const response = await fetch(`${URL_API}/${endpoint}?${parameters}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": key,
    },
    // cache: "no-store",
  });
  return response.json();
};
