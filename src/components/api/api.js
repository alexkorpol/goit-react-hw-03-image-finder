// import axios from "axios";
// export class PixabayAPI {
//   #URL = "https://pixabay.com/api/";
//   #requestSearch = "";

//   constructor() {
//     this.countPages = 1;
//     this.per_page = 40;

//     this.searchParams = new URLSearchParams({
//       key: "35599387-daff3be7791dba4aa3b1a02ca",
//       image_type: "photo",
//       orientation: "horizontal",
//       safesearch: true,
//       per_page: 40,
//     });

//   }
// }

const API_KEY = '35599387-daff3be7791dba4aa3b1a02ca';
const BASE_URL = 'https://pixabay.com/api';
export const PER_PAGE =12;

const searchParams = new URLSearchParams({
      key: API_KEY,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: PER_PAGE,
});

export const getImages = async (query, page = 1) => {
  try {
    const data = await fetch(
      `${BASE_URL}/?q=${query}&page=${page}&${searchParams}`,
    );

    const response = await data.json();
    return response;
  } catch (err) {
    console.log('Error', err);
  }
};

// export default getImages

// getPhotoViaRequest() {
//   return axios.get(`${this.#URL}?${this.searchParams}&q=${this.#requestSearch}&page=${this.countPages}`)
// }

//   resetPage() {
//     this.countPages = 1;
//   }
//   get requestSearch() {
//     return this.#requestSearch;
//   }

//   set requestSearch(newRequestSearch) {
//     this.#requestSearch = newRequestSearch;
//   }
// }





// const BASE_URL = "https://dummyjson.com";

// export const getProducts = async ({ searchQuery, limit, skip }) => {

//   const params = new URLSearchParams({
//     limit,
//     skip,
//     q: searchQuery,
//   });

//   const response = await fetch(`${BASE_URL}/products/search?${params}`);

//   if (!response.ok) {
//     throw new Error("Smth went wrong");
//   }

//   return response.json();
// };

