import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiVerify = {
    getVerifyList: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/verify-list?page=${params.page}`)
        return res.data;
    },
    getUserDetail: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/verify-detail/${params.id}`)
        return res.data;
    },
}
export default apiVerify;