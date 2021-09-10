import axios from "axios";


const baseUri = "https://moadw-challenge.herokuapp.com/api/";


const axiosDef = axios.create({
    baseURL:baseUri,
    headers:{
        "content-type": "application/json",
        "Accept": "application/json",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    }
})



export { axiosDef }