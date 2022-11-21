import http from '../http-common.js'

class JsonService{
    getJson(){
        return http.get('data/productList.json');
    }
    loadUsers(){
        return http.get('data/customers.json')
    }
    loadCities(){
        return http.get('data/cities.json')
    }
}

export default new JsonService();