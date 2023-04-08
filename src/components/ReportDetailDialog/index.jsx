import {
	Button,
	Dialog,
	DialogContent, DialogTitle,
	Stack,
	Typography,
    Checkbox, FormControlLabel,
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import * as React from 'react';
import apiRegister from 'apis/apiRegister';
import { toast } from 'react-toastify';
import numWithDot from 'utils/numWithDot';
import numWithSpace from 'utils/numWithSpace';
import StarIcon from "@mui/icons-material/Star";

function ReportDetailDialog(props) {
	const { openDialog, setOpenDialog, id } = props;
	const [registerdata, setRegisterdata] = React.useState({})
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

	// React.useEffect(() => {
	// 	const getRegisterDetail = () => {
	// 		const params = {
	// 			id: id,
	// 		}
	// 		apiRegister.getRegisterDetail(params).then((result) => {
	// 			setRegisterdata(result.data)
	// 		}).catch((err) => {
	// 			setOpenDialog(false)
	// 			toast.error(err.response.data.message);
	// 		});
	// 	}
	// 	getRegisterDetail()
	// },[])

	const handleDeny = () => {
		const params = {
			id: id
		}
		apiRegister.denyRegister(params).then((result) => {
			toast.success("Từ chối yêu cầu đăng ký xe thành công !!!");
			setOpenDialog(false)
			setTimeout(() => {window.location.reload(false)},2000)
		}).catch((err) => {
			setOpenDialog(false)
			toast.error(err.response.data.message);
		});
	}
	
	const handleAccept = () => {
		const params = {
			id: id
		}
		apiRegister.acceptRegister(params).then((result) => {
			toast.success("Chấp nhận yêu cầu đăng ký xe thành công !!!");
			setOpenDialog(false)
			setTimeout(() => {window.location.reload(false)},2000)
		}).catch((err) => {
			setOpenDialog(false)
			toast.error(err.response.data.message);
		});
	}
	return (
		<Dialog open={openDialog} maxWidth="lg" fullWidth onClose={() => setOpenDialog(false)} className="reportdetail-container">
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					CHI TIẾT BÁO XẤU
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack spacing={1}>
					<Typography className="reportdetail-container__tilte">THÔNG TIN CHỦ XE</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Họ và tên:</span> {registerdata.ownerId && registerdata.ownerId.username} */}
                        <span className="title">Họ và tên:</span> Bành Đăng Khoa
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Email:</span> {registerdata.ownerId && registerdata.ownerId.email} */}
                        <span className="title">Email:</span> khoa9205@gmail.com
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Số điện thoại:</span> {registerdata.ownerId && registerdata.ownerId.phoneNumber} */}
                        <span className="title">Số điện thoại:</span> 0928776640
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Giới tính:</span> {registerdata.ownerId && gender(registerdata.ownerId.gender)} */}
                        <span className="title">Giới tính:</span> Nam
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Địa chỉ:</span> {registerdata.ownerId && registerdata.ownerId.location} */}
                        <span className="title">Địa chỉ:</span> 153/24 Lê Hoàng Phái
					</Typography>
					<Typography className="reportdetail-container__tilte">THÔNG TIN XE</Typography>
                    <Typography className="caritem-container__text">
						{/* <span className="title">Đánh giá:</span> {cardata.rating} */}
                        <span className="title">Đánh giá:</span> 5
						<StarIcon
							htmlColor={variables.mainyellowcolor}
							fontSize="medium"
							className="caritem-container__icon"
						/>
					</Typography>
					<Typography className="caritem-container__text">
						{/* <span className="title">Giá thuê xe:</span> {registerdata.rentprice && numWithDot(registerdata.rentprice)} đ /ngày */}
                        <span className="title">Giá thuê xe:</span> 500 000 đ /ngày
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Biển số xe:</span> {registerdata.licenseplate} */}
                        <span className="title">Biển số xe:</span> 51A-123.23
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Hãng xe:</span> {registerdata.brand} */}
                        <span className="title">Hãng xe:</span> KIA
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Mẫu xe:</span> {registerdata.model} */}
                        <span className="title">Mẫu xe:</span> Sporttage
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Năm sản xuất:</span> {registerdata.year} */}
                        <span className="title">Năm sản xuất:</span> 2021
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Kiểu xe:</span> {registerdata.type} */}
                        <span className="title">Kiểu xe:</span> SUV
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Số ghế:</span> {registerdata.seats} */}
                        <span className="title">Số ghế:</span> 5
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Truyền động:</span> {transmission(registerdata.transmission)} */}
                        <span className="title">Truyền động:</span> Tự động
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <span className="title">Loại nhiên liệu:</span> {fuel(registerdata.fueltype)} */}
                        <span className="title">Loại nhiên liệu:</span> Xăng
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <pre style={{ fontFamily: 'inherit', margin:0, }}>
							<span className="title">Mô tả:</span> {registerdata.description}
						</pre> */}
                        <pre style={{ fontFamily: 'inherit', margin:0, }}>
							<span className="title">Mô tả:</span> Xe mới, đi kỹ
						</pre>
					</Typography>
					<Typography className="reportdetail-container__text">
						{/* <pre style={{ fontFamily: 'inherit', margin:0, }}>
							<span className="title">Điều khoản thuê xe:</span>
							{registerdata.rentterm}
    					</pre>  */}
                        <pre style={{ fontFamily: 'inherit', margin:0, }}>
							<span className="title">Điều khoản thuê xe:</span>
							Xe xịn
    					</pre> 
					</Typography>
					<Typography align="center" className="reportdetail-container__text">
						Ảnh mặt trước
					</Typography>
					<img className="reportdetail-container__img" src={registerdata.vehicleimage && (registerdata.vehicleimage[0] ? registerdata.vehicleimage[0] : 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/p8dimfuyKkuCDVTBJXllqA.jpg')} ></img>
                    <Typography align="center" className="reportdetail-container__text">
						Ảnh mặt sau
					</Typography>
					<img className="reportdetail-container__img" src={registerdata.vehicleimage && (registerdata.vehicleimage[1] ? registerdata.vehicleimage[1] :'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/iot31_kGM2egPW8Y13plRg.jpg')} ></img>
                    <Typography align="center" className="reportdetail-container__text">
						Ảnh bên trái
					</Typography>
					<img className="reportdetail-container__img" src={registerdata.vehicleimage && (registerdata.vehicleimage[2] ? registerdata.vehicleimage[2] :'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/ZqO0x5znjDiQmAXm-TZImA.jpg')} ></img>
                    <Typography align="center" className="reportdetail-container__text">
						Ảnh bên phải
					</Typography>
					<img className="reportdetail-container__img" src={registerdata.vehicleimage && (registerdata.vehicleimage[3] ? registerdata.vehicleimage[3] :'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/Q4d90YuvqmySKM6antvEhA.jpg')} ></img>
                    <Typography className="reportdetail-container__tilte">NỘI DUNG BÁO XẤU</Typography>
                    <Stack>
						<FormControlLabel control={<Checkbox size="small" checked inputProps={{ onClick:'return false;'}}/>} label="Chất lượng xe" />
						<FormControlLabel control={<Checkbox size="small" checked inputProps={{ onClick:'return false;'}}/>} label="Giá cả không rõ ràng" />
						<FormControlLabel control={<Checkbox size="small" checked inputProps={{ onClick:'return false;'}}/>} label="Giao xe, lấy xe không đúng giờ" />
						<FormControlLabel control={<Checkbox size="small" inputProps={{ onClick:'return false;'}}/>} label="Khác"/>
					</Stack>
                    <Typography className="reportdetail-container__text">
						<pre style={{ fontFamily: 'inherit', margin:0, }}>
							<span className="title">Lý do báo xấu:</span> AAAAAA
						</pre>
					</Typography>
					<Stack direction={'row'} justifyContent="center" spacing={3} paddingTop={2}>
						<Button
							variant="standard"
							onClick={handleDeny}
							sx={{
								width: '300px',
								bgcolor: '#f34a38',
								color: '#FFFFFF',
								'&.MuiButtonBase-root:hover': {
									bgcolor: '#f34a38',
								},
							}}
						>
							XÓA BÁO XẤU
						</Button>
						<Button
							variant="standard"
							onClick={handleAccept}
							sx={{
								width: '300px',
								bgcolor: variables.textgreencolor,
								color: '#FFFFFF',
								'&.MuiButtonBase-root:hover': {
									bgcolor: variables.textgreencolor,
								},
							}}
						>
							XỬ LÝ
						</Button>
					</Stack>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default ReportDetailDialog;
