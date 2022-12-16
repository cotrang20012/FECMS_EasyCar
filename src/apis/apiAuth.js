import axios from "axios";
import {  axiosClient,axiosClientWithToken} from "./axiosClient";

const apiAuth = {
    login: async (params) => {
        const res = await axiosClient.post(`/auth/login-admin`,params)
        return res.data;
    },
    getuserinfo: async(params) => {
        const res = await axiosClientWithToken.get(`/user/`,params)
        return res.data
    },

}
export default apiAuth;