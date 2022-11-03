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
	Pagination
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import UserItem from './UserItem';

function UserTable() {
	return (
		<Box className="usertable-container">
			<Paper elevation={3} sx={{ width: '100%', height: '100%' }}>
				<Stack padding={2} spacing={1} >
                    <Stack direction='row' spacing={1}>
                    <TextField
						size="small"
						className="usertable-container__findfield"
                        placeholder='Nhập vào số điện thoại, họ tên, email...'
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon style={{ color: variables.maincolor }} />
								</InputAdornment>
							),
						}}
					></TextField>
                    <Button variant="contained">TÌM KIẾM</Button>
                    </Stack>
                    <Divider/>
					<UserItem/>
					<Pagination count={10} shape="rounded" sx={{alignSelf:'center', justifySelf:'flex-end'}}/>
				</Stack>
			</Paper>
		</Box>
	);
}

export default UserTable;
