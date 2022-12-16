import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiRegister = {
    getRegisterList: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/vehicle-register-list?page=${params.page}`)
        return res.data;
    },

    getRegisterDetail: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/vehicle-register-detail/${params.id}`)
        return res.data;
    },

    acceptRegister: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/accept-vehicle-register/${params.id}`)
        return res.data;
    },

    denyRegister: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/deny-vehicle-register/${params.id}`)
        return res.data;
    },
}
export default apiRegister;