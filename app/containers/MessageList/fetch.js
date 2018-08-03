import axios from 'axios';

const fetch = () =>
  axios({
    method: 'GET',
    url: 'http://localhost:3000/message',
  });

export default fetch;
