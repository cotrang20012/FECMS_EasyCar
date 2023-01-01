import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Avatar, Button, Paper, Stack, Typography } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import VerifyDialog from 'components/VerifyDialog';
import './style.scss';
import * as React from 'react';
function VerifyItem(props) {
	const {item} = props
	const [openDialog, setOpenDialog] = React.useState(false);
	return (
		<Paper className="verifyitem-container" variant={'outlined'} sx={{ borderColor: variables.maincolor }}>
			<Stack sx={{ height: '164px' }} direction="row" padding={1} spacing={2}>
				<Avatar
					alt="Remy Sharp"
					src={item.userId.avatar}
					sx={{ width: 80, height: 80, alignSelf: 'center' }}
				/>
				<Stack spacing={1} width="460px" justifyContent={'center'}>
					<Typography>
						<span className="bold">THÔNG TIN TÀI KHOẢN</span>
					</Typography>
					<Typography>
						<span className="bold">E-mail:</span> {item.userId.email}
					</Typography>
					<Typography>
						<span className="bold">Họ và Tên:</span> {item.userId.username}
					</Typography>
					<Typography>
						<span className="bold">Số điện thoại:</span> {item.userId.phoneNumber}
					</Typography>
					<Typography sx={{whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis',}}>
						<span className="bold">Địa Chỉ:</span> {item.userId.location}
					</Typography>
				</Stack>
				<Stack spacing={1} paddingTop="6px">
					<Typography>
						<span className="bold">THÔNG TIN GPLX</span>
					</Typography>
					<Typography>
						<span className="bold">Số GPLX:</span> {item.driverLicenseNumber}
					</Typography>
					<Typography>
						<span className="bold">Ngày sinh:</span> {(new Date(item.bod)).getDate()}/{(new Date(item.bod)).getMonth()+1}/{(new Date(item.bod)).getFullYear()}
					</Typography>
				</Stack>
				<Stack flex={1} justifyContent={'center'} spacing={1}>
					<Button
						variant="outlined"
						size="medium"
						className="verifyitem-container__details"
						onClick={() => {setOpenDialog(true)}}
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
				</Stack>
			</Stack>
			{openDialog && <VerifyDialog openDialog={openDialog} setOpenDialog={setOpenDialog} id={item._id}/>}
		</Paper>
	);
}

export default VerifyItem;
