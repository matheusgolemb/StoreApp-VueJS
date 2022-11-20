import http from '../http-common.js'

class JsonService{
    getJson(){
        return http.get('data/productList.json');
    }
}

export default new JsonService();