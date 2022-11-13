import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
	Avatar, Button, Paper, Stack, Typography
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import UserDetailsDialog from 'components/UserDetailsDialog';
import './style.scss';
import * as React from 'react'
function UserItem() {
	const [openDialog, setOpenDialog] = React.useState(false);
	return (
		<Paper className="useritem-container" variant={'outlined'} sx={{ borderColor: variables.maincolor }}>
			<Stack sx={{ height: '164px' }} direction="row" padding={1} spacing={2}>
				<Avatar
					alt="Remy Sharp"
					src="https://n1-astg.mioto.vn/g/2022/08/02/21/f4VeE-IlZhkA073LQ7xv_A.jpg"
					sx={{ width: 80, height: 80, alignSelf: 'center' }}
				/>
				<Stack spacing={1} width="460px" justifyContent={'center'}>
					<Typography>
						<span className="bold">THÔNG TIN TÀI KHOẢN</span>
					</Typography>
					<Typography>
						<span className="bold">E-mail:</span> annguyen@gmail.com
					</Typography>
					<Typography>
						<span className="bold">Họ và Tên:</span> Nguyễn Phúc An
					</Typography>
					<Typography>
						<span className="bold">Số điện thoại:</span> 0928776640
					</Typography>
					<Typography>
						<span className="bold">Địa Chỉ:</span> 153/24 Lê Hoàng Phái, Phường 17, TP.Hồ Chí Minh
					</Typography>
				</Stack>
				<Stack paddingTop="6px">
					<Typography>
						<span className="bold">TRẠNG THÁI TÀI KHOẢN</span>
					</Typography>
					<Typography>
						<span className="bold">Kích hoạt:</span>{' '}
						{true ? (
							<CheckCircleRoundedIcon fontSize="medium" className="useritem-container__icon green" />
						) : (
							<CancelRoundedIcon fontSize="medium" className="useritem-container__icon red" />
						)}
					</Typography>
					<Typography>
						<span className="bold">Xác thực:</span>{' '}
						{true ? (
							<CheckCircleRoundedIcon fontSize="medium" className="useritem-container__icon green" />
						) : (
							<CancelRoundedIcon fontSize="medium" className="useritem-container__icon red" />
						)}
					</Typography>
				</Stack>
				<Stack flex={1} justifyContent={"center"} spacing={1}>
					<Button
						variant="outlined"
						size="medium"
						className="useritem-container__details"
						onClick={() => setOpenDialog(true)}
						sx={{
							borderColor: variables.textgreencolor,
							color: variables.textgreencolor,
							fontWeight: 'bold',
							width: '150px ',
							alignSelf: 'center',
						}}
					>
						CHI TIẾT
					</Button>
					<Button
						variant="outlined"
						size="medium"
						className="useritem-container__block"
						sx={{
							borderColor: variables.orangecolor,
							color: variables.orangecolor,
							fontWeight: 'bold',
							width: '150px ',
							alignSelf: 'center',
						}}
					>
						KHOÁ
					</Button>
					<Button
						variant="outlined"
						size="medium"
						className="useritem-container__delete"
						sx={{
							borderColor: variables.redcolor,
							color: variables.redcolor,
							fontWeight: 'bold',
							width: '150px ',
							alignSelf: 'center',
						}}
					>
						XOÁ
					</Button>
				</Stack>
			</Stack>
			<UserDetailsDialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>
		</Paper>
	);
}

export default UserItem;
