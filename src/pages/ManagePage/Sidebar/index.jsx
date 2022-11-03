import * as React from 'react';
import './style.scss';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
	Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';
function Sidebar() {
	return (
		<Stack className="sidebar-container" padding={2}>
			<Stack direction="row" alignItems={'center'} spacing={1} alignSelf="center">
				<Avatar
					alt="Remy Sharp"
					src="https://n1-astg.mioto.vn/g/2022/08/02/21/f4VeE-IlZhkA073LQ7xv_A.jpg"
					sx={{ width: 75, height: 75 }}
				/>
				<Stack>
					<Typography className="sidebar-container__name">Nguyễn Phúc An</Typography>
					<Typography>
						<a href="#">Đổi mật khẩu</a>
					</Typography>
				</Stack>
			</Stack>
			<Divider sx={{ paddingTop: '10px' }} />
			<Button
				component={Link}
				to="/profile/info"
				size="medium"
				className="sidebar-container__button"
				sx={{
					fontWeight: 'bold',
					height: '45px',
				}}
			>
				QUẢN LÝ TÀI KHOẢN
			</Button>
            <Divider  />
			<Button
				component={Link}
				to="/profile/info"
				size="medium"
				className="sidebar-container__button"
				sx={{
					fontWeight: 'bold',
					height: '45px',
				}}
			>
				QUẢN LÝ YÊU CẦU XÁC THỰC TÀI KHOẢN
			</Button>
            <Divider  />
			<Button
				component={Link}
				to="/profile/info"
				size="medium"
				className="sidebar-container__button"
				sx={{
					fontWeight: 'bold',
					height: '45px',
				}}
			>
				QUẢN LÝ ĐĂNG KÝ XE CHO THUÊ
			</Button>
            <Divider  />
			<Button
				component={Link}
				to="/profile/info"
				size="medium"
				className="sidebar-container__button"
				sx={{
					fontWeight: 'bold',
					height: '45px',
				}}
			>
				QUẢN LÝ XE CHO THUÊ
			</Button>
		</Stack>
	);
}

export default Sidebar;
