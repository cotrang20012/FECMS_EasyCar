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

    postponeUser: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/suspend-user/${params.id}`)
        return res.data;
    },

    activateUser: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/activate-user/${params.id}`)
        return res.data;
    },

    deleteUser: async (params) => {
        const res = await axiosClientWithToken.delete(`/admin/delete-user/${params.id}`)
        return res.data;
    },
}
export default apiUser;