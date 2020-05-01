export const upCommingItems = () => {
   return fetch("https://fortniteapi.io/items/upcoming?lang=en", {
      method: "GET",
      headers: {
         Authorization: process.env.REACT_APP_APIKEY,
      },
   })
      .then((response) => {
         return response.json();
      })
      .catch((err) => console.log(err));
};

export const getItemById = (itemId) => {};

export const listItems = () => {
   return fetch("https://fortniteapi.io/items/list?lang=en", {
      method: "GET",
      headers: {
         Authorization: process.env.REACT_APP_APIKEY,
      },
   })
      .then((response) => {
         return response.json();
      })
      .catch((err) => console.log(err));
};
