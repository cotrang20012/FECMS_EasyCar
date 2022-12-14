import * as React from 'react';
import './style.scss';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import {
	Button,
	Divider,
	Stack,
	Typography,
	Avatar,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CarRentalIcon from '@mui/icons-material/CarRental';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {setUserInfo} from 'slices/userSlice'
import apiAuth from 'apis/apiAuth';
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import { clearUserInfo } from 'slices/userSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutSuccess } from 'slices/authSlice';
function Sidebar() {
	const user = useSelector((state) => state.user.info) || {};
	const accesstoken = useSelector((state) => state.auth.accessToken);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSignOut = () => {
		dispatch(clearUserInfo());
		dispatch(logoutSuccess());
		navigate('/');
	};
	React.useEffect(() => {
		const getInfo = () => {
			if(accesstoken){
				apiAuth
					.getuserinfo()
					.then((res) => {
						if (res) {
							dispatch(setUserInfo(res.data));
						}
					})
					.catch()
					.finally();
			}
		}
		getInfo()
	},[accesstoken])
	return (
		<Stack className="sidebar-container" padding={2} sx={{bgcolor:'#FFF'}}>
			<Typography
				align="center"
				variant="h4"
				sx={{
					color: variables.maincolor,
					fontFamily: 'Orbitron',
					paddingBottom:'8px',
				}}
			>
				EasyCar
			</Typography>
			<Divider />
			<Stack direction="row" alignItems={'center'} spacing={1} alignSelf="center" paddingTop={1}>
				<Avatar
					alt="Remy Sharp"
					src={user.avatar ? user.avatar :"https://n1-astg.mioto.vn/g/2022/08/02/21/f4VeE-IlZhkA073LQ7xv_A.jpg"}
					sx={{ width: 75, height: 75 }}
				/>
				<Stack>
					<Typography className="sidebar-container__name">{user.username}</Typography>
					<Typography>
						<a href="#">?????i m???t kh???u</a>
					</Typography>
				</Stack>
			</Stack>
			<Divider sx={{ paddingTop: '10px' }} />
			<Button
				component={Link}
				to="/dashboard/user"
				size="medium"
				className="sidebar-container__button"
				sx={{
					fontWeight: 'bold',
					height: '45px',
				}}
				startIcon={<AccountCircleIcon/>}
			>
				QU???N L?? T??I KHO???N
			</Button>
			<Divider />
			<Button
				component={Link}
				to="/dashboard/verify"
				size="medium"
				className="sidebar-container__button"
				sx={{
					fontWeight: 'bold',
					height: '45px',
				}}
				startIcon={<HowToRegIcon/>}
			>
				QU???N L?? X??C TH???C T??I KHO???N
			</Button>
			<Divider />
			<Button
				component={Link}
				to="/dashboard/carregister"
				size="medium"
				className="sidebar-container__button"
				sx={{
					fontWeight: 'bold',
					height: '45px',
				}}
				startIcon={<TextSnippetIcon/>}
			>
				QU???N L?? ????NG K?? XE CHO THU??
			</Button>
			<Divider />
			<Button
				component={Link}
				to="/dashboard/car"
				size="medium"
				className="sidebar-container__button"
				sx={{
					fontWeight: 'bold',
					height: '45px',
				}}
				startIcon={<CarRentalIcon/>}
			>
				QU???N L?? XE CHO THU??
			</Button>
			<Divider />
			<Button
				component={Link}
				to="/dashboard/withdraw"
				size="medium"
				className="sidebar-container__button"
				sx={{
					fontWeight: 'bold',
					height: '45px',
				}}
				startIcon={<AttachMoneyIcon/>}
			>
				Y??U C???U R??T TI???N
			</Button>
			<Divider />
			<Button
					onClick={handleSignOut}
					size="medium"
					className="sidebar-container__button"
					sx={{
						fontWeight: 'bold',
						height: '45px',
						color: variables.redcolor,
					}}
					startIcon={<LogoutIcon />}
				>
					????NG XU???T
				</Button>
		</Stack>
	);
}

export default Sidebar;
