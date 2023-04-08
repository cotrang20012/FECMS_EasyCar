import { Button, Paper, Stack, Typography, Divider } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import CarDetailDialog from 'components/CarDetailDialog';
import './style.scss';
import * as React from 'react';
import ConfirmDialog from 'components/ConfirmDialog';
import { toast } from 'react-toastify';
import ReportDetailDialog from 'components/ReportDetailDialog';
function ReportItem(props) {
	const { item } = props;
	const [openDialog, setOpenDialog] = React.useState(false);
	const [text, setText] = React.useState('');

	return (
		<Paper className="reportitem-container" variant={'outlined'} sx={{ borderColor: variables.maincolor }}>
			<Stack sx={{ height: '164px' }} direction="row" padding={1} spacing={2}>
				<Stack spacing={1} width="220px" justifyContent={'center'}>
					<Typography>
						<span className="bold">THÔNG TIN XE</span>
					</Typography>
					<Typography>
						<span className="bold">Biển số xe:</span> 59A-123.45
					</Typography>
					<Typography>
						<span className="bold">Hãng xe:</span> KIA
					</Typography>
					<Typography>
						<span className="bold">Mẫu xe:</span> Sportage
					</Typography>
					<Typography>
						<span className="bold">Năm sản xuất:</span> 2021
					</Typography>
				</Stack>
				<Divider orientation="vertical" />
				<Stack spacing={1} width="220px" paddingTop="6px">
					<Typography>
						<span className="bold">THÔNG TIN CHỦ XE</span>
					</Typography>
					<Typography>
						<span className="bold">E-mail:</span> khoa9205141@gmail.com
					</Typography>
					<Typography>
						<span className="bold">Họ và Tên:</span> Bành Đăng Khoa
					</Typography>
					<Typography>
						<span className="bold">Số điện thoại:</span> 0907893960
					</Typography>
				</Stack>
                <Divider orientation="vertical" />
				<Stack spacing={1} width="220px" paddingTop="6px">
					<Typography>
						<span className="bold">NGƯỜI BÁO CÁO</span>
					</Typography>
					<Typography>
						<span className="bold">E-mail:</span> khoa9205141@gmail.com
					</Typography>
					<Typography>
						<span className="bold">Họ và Tên:</span> Bành Đăng Khoa
					</Typography>
					<Typography>
						<span className="bold">Số điện thoại:</span> 0907893960
					</Typography>
				</Stack>
				<Stack flex={1} justifyContent={'center'} spacing={1}>
					<Button
						variant="outlined"
						size="medium"
						className="reportitem-container__details"
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
				</Stack>
			</Stack>
			{openDialog && <ReportDetailDialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>}
		</Paper>
	);
}

export default ReportItem;
