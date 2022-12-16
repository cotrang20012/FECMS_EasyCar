import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiUser = {
    getUserList: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/user-list?page=${params.page}`)
        return res.data;
    },

    getUserDetail: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/detail-user/${params.id}`)
        return res.data;
    },
}
export default apiUser;