import axios from "axios";
import {baseURL} from "../components/constants";


export const axiosService = axios.create({
    baseURL: baseURL
});


