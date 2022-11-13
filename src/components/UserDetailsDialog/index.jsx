import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Stack, Typography, Avatar } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import './style.scss';

function UserDetailsDialog(props) {
	const { openDialog, setOpenDialog } = props;
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
							src="https://n1-astg.mioto.vn/g/2022/08/02/21/f4VeE-IlZhkA073LQ7xv_A.jpg"
							sx={{ width: 75, height: 75 }}
						/>
						<Stack>
							<Typography className="userdetails-container__verifystatus" sx={{ fontSize: '16px', fontWeight: 'bolder' }}>
                                Trạng thái xác thực:{' '}
                                {false ? (
                                    <CheckCircleRoundedIcon fontSize="small" className="userdetails-container__icon green" />
                                ) : (
                                    <CancelRoundedIcon fontSize="small" className="userdetails-container__icon red" />
                                )}
                            </Typography>
                            <Typography className="userdetails-container__verifystatus" sx={{ fontSize: '16px', fontWeight: 'bolder' }}>
                                Trạng thái kích hoạt:{' '}
                                {false ? (
                                    <CheckCircleRoundedIcon fontSize="small" className="userdetails-container__icon green" />
                                ) : (
                                    <CancelRoundedIcon fontSize="small" className="userdetails-container__icon red" />
                                )}
                            </Typography>
						</Stack>
					</Stack>
                    <Typography className="userdetails-container__text"><span className='title'>Họ và tên:</span> Nguyễn Phúc An</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Email:</span> cotrang2012@gmail.com</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Số điện thoại:</span> 0928776640</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Giới tính:</span> Nam</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Địa chỉ:</span> 153 Lê Hoàng Phái, Phường 17, Quận Gò Vấp</Typography>
					<Typography className="userdetails-container__tilte">THÔNG TIN GIẤY PHÉP LÁI XE</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Số GPLX:</span> 123456789</Typography>
					<Typography className="userdetails-container__text"><span className='title'>Họ và Tên</span> Nguyễn Phúc An</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Ngày sinh:</span> 04/02/2001</Typography>
                    <Typography className="userdetails-container__text"><span className='title'>Ảnh mặt trước:</span></Typography>
					<img className="userdetails-container__img" src="https://www.hoclaixetphcm.com/wp-content/uploads/2016/05/giay-phep-lai-xe-hang-a1.jpg"></img>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default UserDetailsDialog;
