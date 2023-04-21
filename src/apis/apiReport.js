import axios from "axios";
import {  axiosClient,axiosClientWithToken} from "./axiosClient";

const apiReport = {
    getReportList: async (params) => {
        const res = await axiosClientWithToken.post(`/admin/report-list?page=${params.page}`,params)
        return res.data;
    },

    getReportDetail: async (params) => {
        const res = await axiosClientWithToken.get(`/admin/report-detail/${params.id}`)
        return res.data;
    },

    acceptReport: async(params) => {
        const res = await axiosClientWithToken.post(`/admin/accept-report/${params.id}`)
        return res.data
    },

    denyReport: async(params) => {
        const res = await axiosClientWithToken.post(`/admin/deny-report/${params.id}`)
        return res.data
    },
}
export default apiReport;