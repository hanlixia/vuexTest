import Vue from 'vue';
import VueResource from 'vue-resource';
import axios from 'axios'
Vue.use(VueResource);
Vue.use(axios);

const URL = {
    listUrl: 'mock/drugs.json',
    detailUrl: 'mock/drugs.json',
}
export default {
	getData (url, params, done, error) {
        return Vue.http.get(URL[url], params).then(done, error);
        //return axios.get(URL[url], params).then(done);
    }
}
