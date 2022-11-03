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
	Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function UserItem() {
	return (
		<Paper className="useritem-container" variant={'outlined'} sx={{borderColor: variables.maincolor}}>
			<Stack sx={{height:'164px'}} direction="row" padding={1} spacing={2}>
				<Avatar
					alt="Remy Sharp"
					src="https://n1-astg.mioto.vn/g/2022/08/02/21/f4VeE-IlZhkA073LQ7xv_A.jpg"
					sx={{ width: 80, height: 80, alignSelf:'center'}}
				/>
                <Stack spacing={1} width="460px" justifyContent={'center'}>
                    <Typography><span className='bold'>THÔNG TIN TÀI KHOẢN</span></Typography>
                    <Typography><span className='bold'>E-mail:</span> annguyen@gmail.com</Typography>
                    <Typography><span className='bold'>Họ và Tên:</span> Nguyễn Phúc An</Typography>
                    <Typography><span className='bold'>Số điện thoại:</span> 0928776640</Typography>
                    <Typography><span className='bold'>Địa Chỉ:</span> 153/24 Lê Hoàng Phái, Phường 17, TP.Hồ Chí Minh</Typography>
                </Stack>
                <Stack spacing={1}>
                    <Typography><span className='bold'>TRẠNG THÁI TÀI KHOẢN</span></Typography>
                    <Typography><span className='bold'>Kích hoạt</span></Typography>
                </Stack>
			</Stack>
		</Paper>
	);
}

export default UserItem;
