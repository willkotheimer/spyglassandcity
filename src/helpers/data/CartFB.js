import axios from 'axios';

const baseUrl = 'https://spyglassandcity-default-rtdb.firebaseio.com';

const getAllCartItems = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cart.json`)
    .then((response) => {
      const projects = [];
      Object.values(response.data).forEach((project) => {
        projects.push(project);
      });
      resolve(projects);
    })
    .catch((error) => reject(error));
});

export default getAllCartItems;
