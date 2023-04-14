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
						<span className="bold">Biển số xe:</span> {item.vehicleId.licenseplate}
					</Typography>
					<Typography>
						<span className="bold">Hãng xe:</span> {item.vehicleId.brand}
					</Typography>
					<Typography>
						<span className="bold">Mẫu xe:</span> {item.vehicleId.model}
					</Typography>
					<Typography>
						<span className="bold">Năm sản xuất:</span> {item.vehicleId.year}
					</Typography>
				</Stack>
				<Divider orientation="vertical" />
				<Stack spacing={1} width="220px" paddingTop="6px">
					<Typography>
						<span className="bold">THÔNG TIN CHỦ XE</span>
					</Typography>
					<Typography>
						<span className="bold">E-mail:</span> {item.vehicleId.ownerId.email}
					</Typography>
					<Typography>
						<span className="bold">Họ và Tên:</span> {item.vehicleId.ownerId.username}
					</Typography>
					<Typography>
						<span className="bold">Số điện thoại:</span> {item.vehicleId.ownerId.phoneNumber}
					</Typography>
				</Stack>
                <Divider orientation="vertical" />
				<Stack spacing={1} width="220px" paddingTop="6px">
					<Typography>
						<span className="bold">NGƯỜI BÁO CÁO</span>
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
			{openDialog && <ReportDetailDialog openDialog={openDialog} setOpenDialog={setOpenDialog} id={item._id}/>}
		</Paper>
	);
}

export default ReportItem;
