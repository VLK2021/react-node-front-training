import {axiosService} from "./axiosService";
import {urls} from "../constants";


export const userService = {
    getAll: () => axiosService.get(urls.users),
    createUs: (data) => axiosService.post(urls.createUser, data),
    deleteUser: (id) => axiosService.delete(urls.users + `/${id}`),
    updateUser: (id, {email, password, city}) => axiosService.put(urls.users + `/${id}`, {email, password, city})
}