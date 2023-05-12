import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiCar = {
    getCarList: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/vehicle-list?page=${params.page}`,params)
        return res.data;
    },

    getCarDetail: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/vehicle-detail/${params.id}`)
        return res.data;
    },

    postponeCar: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/postpone-vehicle/${params.id}`)
        return res.data;
    },

    resumeCar: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/resume-vehicle/${params.id}`)
        return res.data;
    },

    deleteCar: async (params) => {
        const res = await axiosClientWithToken.delete(`/admin/delete-vehicle/${params.id}`)
        return res.data;
    },

}
export default apiCar;