const API_URL = 'https://antonioruiz.net/apps/listadecompra/api/';

async function callApi(api, options = {}) {
  
    options.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  
    const url = API_URL + api;
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  }


const api = {
    lists: {
        
      lists(email) {
        return callApi(`/get_public_list/${email}`);
      },
      
    },
  };
  
  export default api;