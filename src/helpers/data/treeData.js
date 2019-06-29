import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getTrees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/trees.json`)
    .then((res) => {
      const trees = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        trees.push(res.data[fbKey]);
      });
      resolve(trees);
    })
    .catch(err => reject(err));
});

export default { getTrees };
