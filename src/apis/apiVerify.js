import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiVerify = {
    getVerifyList: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/verify-list?page=${params.page}`,params)
        return res.data;
    },
    getVerifyDetail: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/verify-detail/${params.id}`)
        return res.data;
    },

    acceptVerify: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/accept-verify/${params.id}`)
        return res.data;
    },

    denyVerify: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/deny-verify/${params.id}`)
        return res.data;
    },
}
export default apiVerify;