import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Stack, Typography, Avatar } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import './style.scss';
import apiUser from 'apis/apiUser';
import { toast } from 'react-toastify';
import * as React from 'react';
function UserDetailsDialog(props) {
	const { openDialog, setOpenDialog, id } = props;
	const [userdata, setUserdata] = React.useState({})
	React.useEffect(() => {
		const getUserDetail = () => {
			const params = {
				id: id,
			}
			apiUser.getUserDetail(params).then((result) => {
				setUserdata(result.data)
			}).catch((err) => {
				setOpenDialog(false)
				toast.error(err.response.data.message);
			});
		}
		getUserDetail();
	},[])

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
	return (
		<Dialog
			open={openDialog}
			maxWidth="md"
			fullWidth
			onClose={() => setOpenDialog(false)}
			className="userdetails-container"
		>
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					CHI TIẾT TÀI KHOẢN
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack spacing={1}>
					<Typography className="userdetails-container__tilte">THÔNG TIN CÁ NHÂN</Typography>
					<Stack direction="row" alignItems={'center'} spacing={1}>
						<Avatar
							alt="Remy Sharp"
							src={userdata.avatar ? userdata.avatar : "https://n1-astg.mioto.vn/g/2022/08/02/21/f4VeE-IlZhkA073LQ7xv_A.jpg"}
							sx={{ width: 75, height: 75 }}
						/>
						<Stack>
							<Typography className="userdetails-container__verifystatus" sx={{ fontSize: '16px', fontWeight: 'bolder' }}>
                                Trạng thái xác thực:{' '}
                                {userdata.verification ? (
                                    <CheckCircleRoundedIcon fontSize="small" className="userdetails-container__icon green" />
                                ) : (
                                    <CancelRoundedIcon fontSize="small" className="userdetails-container__icon red" />
                                )}
                            </Typography>
                            <Typography className="userdetails-container__verifystatus" sx={{ fontSize: '16px', fontWeight: 'bolder' }}>
                                Trạng thái kích hoạt:{' '}
                                {userdata.status ? (
                                    <CheckCircleRoundedIcon fontSize="small" className="userdetails-container__icon green" />
                                ) : (
                                    <CancelRoundedIcon fontSize="small" className="userdetails-container__icon red" />
                                )}
                            </Typography>
						</Stack>
					</Stack>
                    <Typography className="userdetails-container__text"><span className='title'>Họ và tên:</span> {userdata.username}</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Email:</span> {userdata.email}</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Số điện thoại:</span> {userdata.phoneNumber}</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Giới tính:</span> {gender(userdata.gender)}</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Địa chỉ:</span> {userdata.location}</Typography>
					<Typography className="userdetails-container__text"><span className='title'>Ngân hàng:</span> {userdata.bank}</Typography>
					<Typography className="userdetails-container__text"><span className='title'>Tên tài khoản ngân hàng:</span> {userdata.bankaccountname}</Typography>
					<Typography className="userdetails-container__text"><span className='title'>Số tài khoản ngân hàng:</span> {userdata.banknumber}</Typography>
					{userdata.verification && 
					(
						<>
						<Typography className="userdetails-container__tilte">THÔNG TIN GIẤY PHÉP LÁI XE</Typography>
						<Typography className="userdetails-container__text"><span className='title'>Số GPLX:</span> {userdata.driverLicenseNumber}</Typography>
						<Typography className="userdetails-container__text"><span className='title'>Họ và Tên</span> {userdata.fullname}</Typography>
						<Typography className="userdetails-container__text"><span className='title'>Ngày sinh:</span> {(new Date(userdata.bod)).getDate()}/{(new Date(userdata.bod)).getMonth()+1}/{(new Date(userdata.bod)).getFullYear()}</Typography>
						<Typography className="userdetails-container__text"><span className='title'>Ảnh mặt trước:</span></Typography>
						<img className="userdetails-container__img" src={userdata.driverLicenseImg ? userdata.driverLicenseImg :"https://www.hoclaixetphcm.com/wp-content/uploads/2016/05/giay-phep-lai-xe-hang-a1.jpg"}></img>
						</>
					)}
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default UserDetailsDialog;
