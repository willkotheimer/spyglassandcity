import axios from 'axios';

const baseUrl = 'https://spyglassandcity-default-rtdb.firebaseio.com';

const getAllCoffeeItems = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/coffeeItems.json`).then((response) => {
    const projects = [];
    Object.values(response.data).forEach((project) => {
      projects.push(project);
    });
    resolve(projects);
  }).catch((error) => reject(error));
});

export default getAllCoffeeItems;
