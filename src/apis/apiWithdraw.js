import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiWithdraw = {
    getWithdrawList: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/withdraw-list?page=${params.page}`,params)
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