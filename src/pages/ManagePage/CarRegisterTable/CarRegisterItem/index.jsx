import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
	Avatar, Button, Paper, Stack, Typography, Divider
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import RegisterDetailDialog from 'components/RegisterDetailDialog';
import './style.scss';
import * as React from 'react';

function CarRegisterItem(props) {
	const {item} = props
	const [openDialog, setOpenDialog] = React.useState(false);
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
  return (
    <Paper className="carregisteritem-container" variant={'outlined'} sx={{ borderColor: variables.maincolor }}>
			<Stack sx={{ height: '164px' }} direction="row" padding={1} spacing={2}>
				<Stack spacing={1} width="220px" justifyContent={'center'}>
					<Typography>
						<span className="bold">THÔNG TIN XE</span>
					</Typography>
					<Typography>
						<span className="bold">Biển số xe:</span> {item.licenseplate}
					</Typography>
					<Typography>
						<span className="bold">Hãng xe:</span> {item.brand}
					</Typography>
					<Typography>
						<span className="bold">Mẫu xe:</span> {item.model}
					</Typography>
					<Typography>
                        <span className="bold">Năm sản xuất:</span> {item.year}
					</Typography>
				</Stack>
                <Stack spacing={1} width="250px" justifyContent={'center'}>
					<Typography>
						<span className="bold">Loại nhiên liệu:</span> {fuel(item.fueltype)}
					</Typography>
					<Typography>
						<span className="bold">Tiêu thụ nhiên liệu:</span> {item.fuelconsumption} l/100km
					</Typography>
					<Typography>
                        <span className="bold">Truyền động:</span> {transmission(item.transmission)}
					</Typography>
					<Typography>
                    <span className="bold">Kiểu xe:</span> {item.type}
					</Typography>
                    <Typography>
						<span className="bold">Số ghế:</span> {item.seats} Ghế
					</Typography>
				</Stack>
				<Divider orientation="vertical"/>
                <Stack spacing={1} width="220px" paddingTop="6px">
                <Typography>
						<span className="bold">THÔNG TIN TÀI KHOẢN</span>
					</Typography>
					<Typography>
						<span className="bold">E-mail:</span> {item.ownerId.email}
					</Typography>
					<Typography>
						<span className="bold">Họ và Tên:</span> {item.ownerId.username}
					</Typography>
					<Typography>
						<span className="bold">Số điện thoại:</span> {item.ownerId.phoneNumber}
					</Typography>
				</Stack>
				<Stack flex={1} justifyContent={"center"} spacing={1}>
					<Button
						variant="outlined"
						size="medium"
						className="carregisteritem-container__details"
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
			{openDialog && <RegisterDetailDialog openDialog={openDialog} setOpenDialog={setOpenDialog} id={item._id}/>}
		</Paper>
  )
}

export default CarRegisterItem