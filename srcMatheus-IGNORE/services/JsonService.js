import http from '../http-commom.js'

class JsonService{
    getJson(){
        return http.get('data/productList.json')
    }
}

export default new JsonService();