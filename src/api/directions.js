import axios from "axios";

export default (origin, destination, mode) =>
  axios
    .get(`http://private-18455-jesseleduran.apiary-mock.com/directions`, {
      params: {
        origin: `${origin.lat},${origin.lng}`,
        destination: `${destination.lat},${destination.lng}`,
        mode,
      },
    })
    .then(res => res.data);
