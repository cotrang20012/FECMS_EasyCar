import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiCar = {
    getCarList: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/vehicle-list?page=${params.page}`)
        return res.data;
    },

    getCarDetail: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/vehicle-detail/${params.id}`)
        return res.data;
    },

}
export default apiCar;