export default {
  // TODO: Get API from conf
  search(query) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/search?q=${query}`).then(response =>
      response.json()
    );
  }
};