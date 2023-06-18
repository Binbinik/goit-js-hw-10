const API_KEY =
  'live_FDTVyyfqmPGI6Z7Nu7cib1bzwNOrU80NaSMhmp7WdFm3QWwa1Xh2dBd4Dl76nzCH';
const API_URL = 'https://api.thecatapi.com/v1';

export async function fetchBreeds() {
  const response = await fetch(`${API_URL}/breeds`, {
    headers: {
      'x-api-key': API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function fetchCatByBreed(breedId) {
  const response = await fetch(
    `${API_URL}/images/search?breed_ids=${breedId}`,
    {
      headers: {
        'x-api-key': API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data[0];
}
