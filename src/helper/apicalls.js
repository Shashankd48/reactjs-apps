export const upCommingItems = () => {
   return fetch("https://fortniteapi.io/items/upcoming?lang=en", {
      method: "GET",
      headers: {
         Authorization: "ba382022-509d3c06-6f1d7aa9-44dc55b6",
      },
   })
      .then((response) => {
         return response.json();
      })
      .catch((err) => console.log(err));
};

export const getItemsFromShop = () => {
   return fetch("https://fortniteapi.io/shop?lang=en", {
      method: "GET",
      headers: {
         Authorization: "ba382022-509d3c06-6f1d7aa9-44dc55b6",
      },
   })
      .then((response) => {
         return response.json();
      })
      .catch((err) => console.log(err));
};
