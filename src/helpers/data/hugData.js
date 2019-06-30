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

export default { getHugs };


// import axios from 'axios';
// import firebaseConfig from '../apiKeys.json';

// const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

// const getHugs = () => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/hugs.json`)
//     .then((res) => {
//       const hugs = [];
//       Object.keys(res.data).forEach((fbKey) => {
//         res.data[fbKey].id = fbKey;
//         hugs.push(res.data[fbKey]);
//       });
//       resolve(hugs);
//     })
//     .catch(err => reject(err));
// });

// const addHugToFirebase = newHug => axios.post(`${baseUrl}/hugs.json`, newHug);

// const deleteHugFromFirebase = hugId => axios.delete(`${baseUrl}/hugs/${hugId}.json`);

// export default { getHugs, addHugToFirebase, deleteHugFromFirebase };
