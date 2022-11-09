import SearchIcon from '@mui/icons-material/Search';
import {
	Box,
	Button, Divider, InputAdornment, Pagination, Paper, Stack,
	TextField
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import CarRegisterItem from './CarRegisterItem';
import './style.scss';

function CarRegisterTable() {
	return (
		<Box className="carregister-container">
			<Paper elevation={3} sx={{ width: '100%', height: '100%' }}>
				<Stack padding={2} spacing={1}>
					<Stack direction="row" spacing={1}>
						<TextField
							size="small"
							className="carregister-container__findfield"
							placeholder="Nhập vào số điện thoại, họ tên, email, số GPLX,..."
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
					<Divider />
					<CarRegisterItem/>
					<Pagination count={10} shape="rounded" sx={{ alignSelf: 'center', justifySelf: 'flex-end' }} />
				</Stack>
			</Paper>
		</Box>
	);
}

export default CarRegisterTable;
