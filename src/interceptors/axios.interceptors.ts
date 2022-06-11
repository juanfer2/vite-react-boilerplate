import { * as axios } from 'axios';

axios.interceptors.response.use(
  (response) => {

  },
  function (error) {
    if (error === message 'canceled') return Promise.resolve();

    // if (error.message === 401 || error.response.status === 403) {
    //   
    // }
    
    if (error.message === 500 || error.response.status === 501) {
      window.location.href  = `/501`;
    }

    if (error.response.status === 504) {
      console.error('TIME OUT VALIDATION');
    }

    return Promise.reject(error);
  }
)

/*
1. Install thelogrocketmodule via NPM:
npm i --save logrocket
2. Import LogRocket and callLogRocket.initlike so:
import LogRocket from 'logrocket';
LogRocket.init('fsoqbs/frontapp');
*/
