export default {
  // TODO: Get API from conf
  search(query) {
    return fetch(`http://localhost:8000/search?q=${query}`).then(response =>
      response.json()
    );
  }
};
