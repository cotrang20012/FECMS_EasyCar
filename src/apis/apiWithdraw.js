import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiWithdraw = {
    getWithdrawList: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/withdraw-list?page=${params.page}`)
        return res.data;
    },

    acceptWithdraw: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/accept-withdraw/${params.id}`)
        return res.data;
    },

    denyWithdraw: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/deny-withdraw/${params.id}`)
        return res.data;
    },
}
export default apiWithdraw;