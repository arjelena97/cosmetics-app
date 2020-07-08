import { ApiConfig } from "../config/api.config";
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export default function api(
    path: string,
    method: 'get' | 'post' | 'patch' | 'delete',
    body: any | undefined,
) {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: path,
            baseURL: ApiConfig.API_URL,
            data: JSON.stringify(body),
            headers: {
                'Content-type':'application/json',
                'Authorization': getToken(),
            },
        }).then(res => responseHandler(res, resolve, reject))
        .catch(err => reject(err));
    });
   
}

function responseHandler(
    res: AxiosResponse<any>,
    resolve: (value?: unknown) => void, 
    reject: (reason?:any) => void 
 ){
    if (res.status < 200 || res.status >= 300) {
        return reject(res.data);
    }
    
    if (res.data.statusCode < 0 ) {
        return reject(res.data);
    }

    resolve(res.data);
}

function getToken(): string {
    const token = localStorage.getItem('api_token');
    return 'Berer' + token;
}

export function saveToken(token: string) {
    localStorage.setItem('api_token', token);
}