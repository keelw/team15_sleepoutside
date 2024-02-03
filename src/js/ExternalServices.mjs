const baseURL = import.meta.env.VITE_SERVER_URL;
const serverBaseURL = "http://server-nodejs.cit.byui.edu:3000/checkout";

async function convertToJson(res) {
  const result = await res.json();
  if (res.ok) {
    return result;
  } else {
    // throw new Error("Bad Response");
    throw {name: "servicesError", message: result};
  }
}

export default class ExternalServices {
  constructor(category) {
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(serverBaseURL + "checkout/", options).then(convertToJson);
  }
}