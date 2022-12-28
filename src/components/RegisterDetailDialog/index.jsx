import {
	Button,
	Dialog,
	DialogContent, DialogTitle,
	Stack,
	Typography
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import * as React from 'react';
import apiRegister from 'apis/apiRegister';
import { toast } from 'react-toastify';

function RegisterDetailDialog(props) {
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

	React.useEffect(() => {
		const getRegisterDetail = () => {
			const params = {
				id: id,
			}
			apiRegister.getRegisterDetail(params).then((result) => {
				setRegisterdata(result.data)
			}).catch((err) => {
				setOpenDialog(false)
				toast.error(err.response.data.message);
			});
		}
		getRegisterDetail()
	},[])

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
		<Dialog open={openDialog} maxWidth="lg" fullWidth onClose={() => setOpenDialog(false)} className="register-container">
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					CHI TIẾT THÔNG TIN ĐĂNG KÝ XE
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack spacing={1}>
					<Typography className="register-container__tilte">THÔNG TIN CHỦ XE</Typography>
					<Typography className="register-container__text">
						<span className="title">Họ và tên:</span> {registerdata.ownerId && registerdata.ownerId.username}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Email:</span> {registerdata.ownerId && registerdata.ownerId.email}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Số điện thoại:</span> {registerdata.ownerId && registerdata.ownerId.phoneNumber}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Giới tính:</span> {registerdata.ownerId && gender(registerdata.ownerId.gender)}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Địa chỉ:</span> {registerdata.ownerId && registerdata.ownerId.location}
					</Typography>
					<Typography className="register-container__tilte">THÔNG TIN XE</Typography>
					<Typography className="register-container__text">
						<span className="title">Biển số xe:</span> {registerdata.licenseplate}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Hãng xe:</span> {registerdata.brand}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Mẫu xe:</span> {registerdata.model}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Năm sản xuất:</span> {registerdata.year}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Kiểu xe:</span> {registerdata.type}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Số ghế:</span> {registerdata.seats}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Truyền động:</span> {transmission(registerdata.transmission)}
					</Typography>
					<Typography className="register-container__text">
						<span className="title">Loại nhiên liệu:</span> {fuel(registerdata.fueltype)}
					</Typography>
					<Typography className="register-container__text">
						<pre style={{ fontFamily: 'inherit' }}>
							<span className="title">Mô tả:</span> {registerdata.description}
						</pre>
					</Typography>
					<Typography className="register-container__text">
						<pre style={{ fontFamily: 'inherit' }}>
							<span className="title">Điều khoản thuê xe:</span>
							{registerdata.rentterm}
    					</pre> 
					</Typography>
					<Typography align="center" className="register-container__text">
						Ảnh mặt trước
					</Typography>
					<img className="register-container__img" src={registerdata.vehicleimage && (registerdata.vehicleimage[0] ? registerdata.vehicleimage[0] : 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/p8dimfuyKkuCDVTBJXllqA.jpg')} ></img>
                    <Typography align="center" className="register-container__text">
						Ảnh mặt sau
					</Typography>
					<img className="register-container__img" src={registerdata.vehicleimage && (registerdata.vehicleimage[1] ? registerdata.vehicleimage[1] :'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/iot31_kGM2egPW8Y13plRg.jpg')} ></img>
                    <Typography align="center" className="register-container__text">
						Ảnh bên trái
					</Typography>
					<img className="register-container__img" src={registerdata.vehicleimage && (registerdata.vehicleimage[2] ? registerdata.vehicleimage[2] :'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/ZqO0x5znjDiQmAXm-TZImA.jpg')} ></img>
                    <Typography align="center" className="register-container__text">
						Ảnh bên phải
					</Typography>
					<img className="register-container__img" src={registerdata.vehicleimage && (registerdata.vehicleimage[3] ? registerdata.vehicleimage[3] :'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/Q4d90YuvqmySKM6antvEhA.jpg')} ></img>
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
							TỪ CHỐI
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
							CHẤP NHẬN
						</Button>
					</Stack>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default RegisterDetailDialog;
