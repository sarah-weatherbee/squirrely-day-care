import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getSquirrels = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/squirrels.json`)
    .then((res) => {
      const squirrels = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        squirrels.push(res.data[fbKey]);
      });
      resolve(squirrels);
    })
    .catch(err => reject(err));
});

export default { getSquirrels };
