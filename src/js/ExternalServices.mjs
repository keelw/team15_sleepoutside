const baseURL = import.meta.env.VITE_SERVER_URL;
const serverBaseURL = 'http://server-nodejs.cit.byui.edu:3000/checkout';

async function convertToJson(res) {
  if (res.ok) {
    const errorBody = await res.json();
    throw { name: 'serviceError', message: errorBody };
  }
  return res.json();
}

export default class ExternalServices {
  constructor(category) {
    this.categorty = category;
    this.path = `../json/${this.categorty}.json`;
  }

  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return await fetch(serverBaseURL + 'checkout/', options).then(
      convertToJson
    );
  }
}
