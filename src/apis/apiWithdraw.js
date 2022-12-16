import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiWithdraw = {
    getWithdrawList: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/withdraw-list?page=${params.page}`)
        return res.data;
    },
}
export default apiWithdraw;