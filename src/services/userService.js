import {axiosService} from "./axiosService";
import {urls} from "../components/constants";


export const userService = {
    getAll: () => axiosService.get(urls.users),
    createUs: (data) => axiosService.post(urls.createUser, data),
    deleteUser: (id) => axiosService.delete(urls.users + `/${id}`),
}