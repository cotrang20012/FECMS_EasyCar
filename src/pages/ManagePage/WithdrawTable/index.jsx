import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, InputAdornment, Pagination, Paper, Stack, TextField, Chip } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import WithdrawItem from './WithdrawItem';
import * as React from 'react';

function WithdrawTable() {
	const [status, setStatus] = React.useState('ALL')
	return (
		<Box className="withdrawtable-container">
			<Paper elevation={3} sx={{ width: '100%', height: '100%' }}>
				<Stack padding={2} spacing={1}>
					<Stack direction="row" spacing={1}>
						<TextField
							size="small"
							className="withdrawtable-container__findfield"
							placeholder="Nhập vào tên tài khoản, số tài khoản, ngân hàng,..."
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
					<Stack direction={'row'} spacing={1}>
					<Chip label="TẤT CẢ"  sx={{bgcolor:variables.mainlightercolor, color:'white',fontWeight:'bold'}}/>
					<Chip label="CHẤP NHẬN" sx={{bgcolor:variables.textgreencolor, color:'white',fontWeight:'bold'}}  />
					<Chip label="CHỜ DUYỆT" sx={{bgcolor:variables.orangecolor, color:'white',fontWeight:'bold'}} />
					<Chip label="TỪ CHỐI"  sx={{bgcolor:variables.redcolor, color:'white',fontWeight:'bold'}}/>
					</Stack>
                    <WithdrawItem/>
					<WithdrawItem/>
					<WithdrawItem/>
					<Pagination count={10} shape="rounded" sx={{ alignSelf: 'center', justifySelf: 'flex-end' }} />
				</Stack>
			</Paper>
		</Box>
	);
}

export default WithdrawTable;
