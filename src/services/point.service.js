import axios from 'axios';

const API_URL = 'http://localhost:8080/api/integral';

class PointService{
    postReq(data) {
        return axios.post(API_URL, data);
    }
}
export default new PointService();