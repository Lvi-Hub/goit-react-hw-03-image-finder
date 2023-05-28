export function fetchSearch(name, searchName, perPage) {
  return fetch(
    `https://pixabay.com/api/?key=35236008-ec0292df86782f7461c0757b8&q=${searchName}&image_type=photo&per_page=12&page=${perPage}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Nothing found for your request ${name}`));
  });
}
