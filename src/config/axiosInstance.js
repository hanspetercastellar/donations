import axios from "axios";


const baseUri = "https://moadw-challenge.herokuapp.com/api/";


const axiosDef = axios.create({
    baseURL:baseUri
})

axiosDef.defaults.headers.common['cache-control'] = 'no-cache';
axiosDef.defaults.headers.post['Content-Type'] = 'no-cache';
axiosDef.defaults.headers.put['Content-Type'] = 'no-cache';

export { axiosDef }