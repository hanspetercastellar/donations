import {  axiosDef } from "../config/axiosInstance"


export const donationsServices = {

    findOne: async (id) => {
        return await axiosDef.get(`find-one?id=${id}`).then(res => res.data)
    },
    findMany: async (skip,limit, sort) => {
        return await axiosDef.get(`find-many?skip=${skip}&limit=${limit}&sort=${sort}`)
    }

}