export function apiRequest(page) {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((error) => error);
}
