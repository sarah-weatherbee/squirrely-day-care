import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getHugs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/hugs.json`)
    .then((res) => {
      const hugs = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        hugs.push(res.data[fbKey]);
      });
      resolve(hugs);
    })
    .catch(err => reject(err));
});
const deleteHugs = hugId => axios.delete(`${baseUrl}/hugs/${hugId}.json`);

const addHugToFirebase = newHug => axios.post(`${baseUrl}/hugs.json`, newHug);

const editHug = (hugId, updateHug) => axios.put(`${baseUrl}/hugs/${hugId}.json`, updateHug);

export default {
  getHugs,
  addHugToFirebase,
  deleteHugs,
  editHug,
};
