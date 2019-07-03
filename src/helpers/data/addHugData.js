import axios from 'axios';

import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addHug = hugObject => axios.post(`${firebaseUrl}/walks.json`, hugObject);

export default { addHug };
