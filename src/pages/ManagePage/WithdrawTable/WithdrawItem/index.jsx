import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Avatar, Button, Paper, Stack, Typography } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import numWithDot from 'utils/numWithDot';
import './style.scss';

function WithdrawItem(props) {
	const {item} = props
	const status = (status) => {
		switch (status) {
			case 0:
				return <span className="orange status">CHỜ DUYỆT</span>;
			case 1:
				return <span className="green status">CHẤP NHẬN</span>;
			case 2:
				return <span className="red status">TỪ CHỐI</span>;
		}
	};
	return (
		<Paper className="withdrawitem-container" variant={'outlined'} sx={{ borderColor: variables.maincolor }}>
			<Stack sx={{ height: '164px' }} direction="row" padding={1} spacing={2}>
				<Avatar
					alt="Remy Sharp"
					src="https://n1-astg.mioto.vn/g/2022/08/02/21/f4VeE-IlZhkA073LQ7xv_A.jpg"
					sx={{ width: 80, height: 80, alignSelf: 'center' }}
				/>
				<Stack spacing={1} width="300px" justifyContent={'center'}>
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
					<Typography>
						<span className="bold">Trạng thái:</span> {status(item.status)}
					</Typography>
				</Stack>
				<Stack spacing={1} width="300px" justifyContent={'center'}>
					<Typography>
						<span className="bold">THÔNG TIN NGÂN HÀNG</span>
					</Typography>
					<Typography>
						<span className="bold">Tên tài khoản:</span> {item.userId.bankaccountname}
					</Typography>
					<Typography>
						<span className="bold">Số tài khoản:</span> {item.userId.banknumber}
					</Typography>
					<Typography>
						<span className="bold">Ngân hàng:</span> {item.userId.bank}
					</Typography>
				</Stack>
				<Stack flex={1} justifyContent={'center'} spacing={1}>
					<Typography className="withdrawitem-container__money">{numWithDot(item.amount)} đ</Typography>
					<Button
						variant="outlined"
						size="medium"
						className="withdrawitem-container__details"
						sx={{
							borderColor: variables.textgreencolor,
							color: variables.textgreencolor,
							fontWeight: 'bold',
							width: '150px ',
							alignSelf: 'center',
						}}
					>
						CHẤP NHẬN
					</Button>
					<Button
						variant="outlined"
						size="medium"
						className="withdrawitem-container__block"
						sx={{
							borderColor: variables.orangecolor,
							color: variables.orangecolor,
							fontWeight: 'bold',
							width: '150px ',
							alignSelf: 'center',
						}}
					>
						TỪ CHỐI
					</Button>
				</Stack>
			</Stack>
		</Paper>
	);
}

export default WithdrawItem;
