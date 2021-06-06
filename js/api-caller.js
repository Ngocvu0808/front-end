import axios from 'axios';
import * as Config from './const/config';

export default function callApi(endpoint, method, data){
    return axios({
        method: method,
        url: `${Config.URL_API}/${endpoint}`,
        data: data

    }).catch(function (error) {
            console.log(error);
        });
}