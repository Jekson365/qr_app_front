import axios from "axios";

export const Instance = axios.create({
    baseURL:"http://127.0.0.1:3000"
})

export const PyInstance = axios.create({
    baseURL:"http://127.0.0.1:5000"
})