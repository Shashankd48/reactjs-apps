console.log("Apikey: ", process.env.REACT_APP_apiKey);
console.log("messaingsenderId: ", process.env.REACT_APP_messaingSenderId);
console.log("appid: ", process.env.REACT_APP_appId);
console.log("measurmentId: ", process.env.measurementId);
export default {
   apiKey: process.env.REACT_APP_apiKey,
   authDomain: "lcogitlogin.firebaseapp.com",
   databaseURL: "https://lcogitlogin.firebaseio.com",
   projectId: "lcogitlogin",
   storageBucket: "lcogitlogin.appspot.com",
   messagingSenderId: process.env.REACT_APP_messaingSenderId,
   appId: process.env.REACT_APP_appId,
   measurementId: process.env.measurementId,
};
