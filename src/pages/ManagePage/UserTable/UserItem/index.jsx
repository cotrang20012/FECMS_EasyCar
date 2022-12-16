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
function UserItem(props) {
	const {item} = props
	const [openDialog, setOpenDialog] = React.useState(false);
	return (
		<Paper className="useritem-container" variant={'outlined'} sx={{ borderColor: variables.maincolor }}>
			<Stack sx={{ height: '164px' }} direction="row" padding={1} spacing={2}>
				<Avatar
					alt="Remy Sharp"
					src={item.avatar}
					sx={{ width: 80, height: 80, alignSelf: 'center' }}
				/>
				<Stack spacing={1} width="460px" justifyContent={'center'}>
					<Typography>
						<span className="bold">THÔNG TIN TÀI KHOẢN</span>
					</Typography>
					<Typography>
						<span className="bold">E-mail:</span> {item.email}
					</Typography>
					<Typography>
						<span className="bold">Họ và Tên:</span> {item.username}
					</Typography>
					<Typography>
						<span className="bold">Số điện thoại:</span> {item.phoneNumber}
					</Typography>
					<Typography sx={{whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis',}}>
						<span className="bold">Địa Chỉ:</span> {item.location}
					</Typography>
				</Stack>
				<Stack paddingTop="6px">
					<Typography>
						<span className="bold">TRẠNG THÁI TÀI KHOẢN</span>
					</Typography>
					<Typography>
						<span className="bold">Kích hoạt:</span>{' '}
						{item.status ? (
							<CheckCircleRoundedIcon fontSize="medium" className="useritem-container__icon green" />
						) : (
							<CancelRoundedIcon fontSize="medium" className="useritem-container__icon red" />
						)}
					</Typography>
					<Typography>
						<span className="bold">Xác thực:</span>{' '}
						{item.verification ? (
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
