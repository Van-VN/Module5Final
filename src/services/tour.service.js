import axios from "axios";

export default class TourService {
  static async displayTour() {
    return await axios.get("http://localhost:3000/tuors");
  }

  static async tourDetail(id) {
    return await axios.get(`http://localhost:3000/tuors/${id}`);
  }

  static async editTour(id, data) {
    return await axios.put(`http://localhost:3000/tuors/${id}`, data);
  }
}
