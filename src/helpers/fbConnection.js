import firebase from 'firebase';
import axios from 'axios';
import config from './apiKeys.json';

// interceptors work by changing the outbound request before the xhr is sent
// or by changing the response before it's returned to our .then() method.
// We can intecept and modify request that are going out and responses that are coming in
axios.interceptors.request.use(
  (request) => {
    const token = sessionStorage.getItem('token');

    // Give me back whatever is the token value in session storage if it is not null
    if (token != null) {
      // attach the token to the Authorization header
      // request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  (err) => Promise.reject(err),
);

const firebaseApp = () => {
  firebase.initializeApp(config.firebaseKeys);
};

export default firebaseApp;
