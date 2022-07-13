import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = `27155173-9deaa55e537d9ae9b6e54e2b2`;
const perPage = 12;

function fetchImages(searchValue, currentPage) {
  return axios
    .get(
      `?q=${searchValue}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
}

export default fetchImages;
