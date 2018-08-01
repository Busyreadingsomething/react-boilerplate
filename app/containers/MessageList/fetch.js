import axios from 'axios';

const fetch = () =>
  axios({
    method: 'GET',
    url: '/message',
  });

export default fetch;
