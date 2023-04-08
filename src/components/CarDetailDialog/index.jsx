import {
	Dialog,
	DialogContent, DialogTitle,
	Stack,
	Typography
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import StarIcon from "@mui/icons-material/Star";
import apiCar from 'apis/apiCar';
import * as React from 'react';
import { toast } from 'react-toastify';
import numWithDot from 'utils/numWithDot';
import numWithSpace from 'utils/numWithSpace';
function CarDetailDialog(props) {
    const { openDialog, setOpenDialog, id } = props;
	const [cardata, setCardata] = React.useState({});
	const transmission = (transmissiontype) => {
		switch (transmissiontype) {
			case 'AUTO':
				return 'Tự động';
			case 'MANUAL':
				return 'Số sàn';
		}
	};

	const fuel = (fueltype) => {
		switch (fueltype) {
			case 'GASOLINE':
				return 'Xăng';
			case 'DIESEL':
				return 'Dầu Diesel';
			case 'ELECTRIC':
				return 'Điện';
		}
	};

	const gender = (gender) => {
		switch(gender) {
			case 'MALE':
				return 'Nam';
			case 'FEMALE':
				return 'Nữ';
			default :
				return 'Nam';
		}
	}

	React.useEffect(() => {
		const getCarDetail = () => {
			const params = {
				id: id,
			}
			apiCar.getCarDetail(params).then((result) => {
				setCardata(result.data)
			}).catch((err) => {
				setOpenDialog(false)
				toast.error(err.response.data.message);
			});
		}
		getCarDetail()
	},[])
  return (
    <Dialog open={openDialog} maxWidth="lg" fullWidth onClose={() => setOpenDialog(false)} className="caritem-container">
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					CHI TIẾT THÔNG TIN XE
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack spacing={1}>
					<Typography className="caritem-container__tilte">THÔNG TIN CHỦ XE</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Họ và tên:</span> {cardata.ownerId && cardata.ownerId.username}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Email:</span> {cardata.ownerId && cardata.ownerId.email}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Số điện thoại:</span> {cardata.ownerId && cardata.ownerId.phoneNumber}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Giới tính:</span> {cardata.ownerId && gender(cardata.ownerId.gender)}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Địa chỉ:</span> {cardata.ownerId && cardata.ownerId.location}
					</Typography>
					<Typography className="caritem-container__tilte">THÔNG TIN XE</Typography>
                    <Typography className="caritem-container__text">
						<span className="title">Đánh giá:</span> {cardata.rating}
						<StarIcon
							htmlColor={variables.mainyellowcolor}
							fontSize="medium"
							className="caritem-container__icon"
						/>
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Giá thuê xe:</span> {cardata.rentprice && numWithDot(cardata.rentprice)} đ /ngày
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Biển số xe:</span> {cardata.licenseplate}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Hãng xe:</span> {cardata.brand}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Mẫu xe:</span> {cardata.model}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Năm sản xuất:</span> {cardata.year}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Kiểu xe:</span> {cardata.type}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Số ghế:</span> {cardata.seats}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Truyền động:</span> {transmission(cardata.transmission)}
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Loại nhiên liệu:</span> {fuel(cardata.fueltype)}
					</Typography>
					<Typography className="caritem-container__text">
						<pre style={{ fontFamily: 'inherit', margin:0, }}>
							<span className="title">Mô tả:</span> {cardata.description}
						</pre>
					</Typography>
					<Typography className="caritem-container__text">
						<pre style={{ fontFamily: 'inherit', margin:0, }}>
							<span className="title">Điều khoản thuê xe:</span>
							{cardata.rentterm}
						</pre>
					</Typography>
					<Typography align="center" className="caritem-container__text">
						Ảnh mặt trước
					</Typography>
					<img className="caritem-container__img" src={cardata.vehicleimage && (cardata.vehicleimage[0] ? cardata.vehicleimage[0] : 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/p8dimfuyKkuCDVTBJXllqA.jpg')} ></img>
                    <Typography align="center" className="caritem-container__text">
						Ảnh mặt sau
					</Typography>
					<img className="caritem-container__img" src={cardata.vehicleimage && (cardata.vehicleimage[1] ? cardata.vehicleimage[1] : 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/p8dimfuyKkuCDVTBJXllqA.jpg')} ></img>
                    <Typography align="center" className="caritem-container__text">
						Ảnh bên trái
					</Typography>
					<img className="caritem-container__img" src={cardata.vehicleimage && (cardata.vehicleimage[2] ? cardata.vehicleimage[2] : 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/p8dimfuyKkuCDVTBJXllqA.jpg')} ></img>
                    <Typography align="center" className="caritem-container__text">
						Ảnh bên phải
					</Typography>
					<img className="caritem-container__img" src={cardata.vehicleimage && (cardata.vehicleimage[3] ? cardata.vehicleimage[3] : 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/p8dimfuyKkuCDVTBJXllqA.jpg')} ></img>
				</Stack>
			</DialogContent>
		</Dialog>
  )
}

export default CarDetailDialog