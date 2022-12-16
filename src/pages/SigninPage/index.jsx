import * as React from 'react';
import './style.scss';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {
	Box,
	Button,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import apiAuth from 'apis/apiAuth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginSuccess } from 'slices/authSlice';

function SigninPage() {
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogin = () => {
		const params = {
			username: username,
			password: password,
		};

		apiAuth
			.login(params)
			.then((res) => {
				if (res) {
					dispatch(loginSuccess(res));
					toast.success('Đăng nhập thành công');
					setTimeout(() =>{navigate("/dashboard")},2000)
				}
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			})
			.finally(() => {});
	};
	return (
		<Box height='100vh'>
			<Stack alignItems="center" justifyContent="center" className="signin-container" height="100%" spacing={2}>
				<Typography variant="h2"  sx={{
						color: variables.maincolor,
						fontFamily: 'Orbitron',
					}}>
					EasyCar
				</Typography>
                <TextField
							placeholder="Nhập email"
							variant="outlined"
							value={username}
							onChange={(event) => setUsername(event.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<EmailIcon style={{ color: variables.maincolor }} />
									</InputAdornment>
								),
							}}
                            sx={{
                                width:'450px'
                            }}
						/>
						<TextField
							fullWidth
							placeholder="Mật khẩu"
							type="password"
							variant="outlined"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<LockIcon style={{ color: variables.maincolor }} />
									</InputAdornment>
								),
							}}
                            sx={{
                                width:'450px'
                            }}
						/>
                        <Button
							align="center"
							className="signin-container__button"
							variant="standard"
							onClick={handleLogin}
							sx={{
                                width:'450px',
								color: variables.mainwhitecolor,
								bgcolor: variables.mainlightercolor,
							}}
						>
							Đăng nhập
						</Button>
			</Stack>
		</Box>
	);
}

export default SigninPage;
