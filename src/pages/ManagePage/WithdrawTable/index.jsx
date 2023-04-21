import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, InputAdornment, Pagination, Paper, Stack, TextField, Chip } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import WithdrawItem from './WithdrawItem';
import * as React from 'react';
import apiWithdraw from 'apis/apiWithdraw';

function WithdrawTable() {
	const [status, setStatus] = React.useState('ALL')
	const [withdrawlist, setWithdrawlist] = React.useState([]);
	const [page,setPage] = React.useState(1);
	const [totalpage, setTotalpage] = React.useState(1);
	const [option, setOption] = React.useState([
		{
			id: 1,
			value: 0,
			selected: true,
		},
		{
			id: 2,
			value: 1,
			selected: false,
		},
		{
			id: 3,
			value: 2,
			selected: false,
		},
		{
			id: 4,
			value: 'ALL',
			selected: false,
		},
	]);
	const handleChange = (event, value) => {
		setPage(value);
	};

	React.useEffect(() => {
		const getWithdrawList = () => {
			const params = {
				page: page,
				option: option,
			}

			apiWithdraw.getWithdrawList(params).then((result) => {
				setWithdrawlist(result.data)
				if(result.totalPage != 0) {
					setTotalpage(result.totalPage)
				}
			}).catch((err) => {
				
			});
		}
		getWithdrawList();
	},[page,option])

	const handleOptionSelected = (id) => {
		let newOption = [...option];
		newOption.forEach((item) => (item.selected = false));
		let index = newOption.findIndex((item) => item.id === id);
		if (index >= 0) {
			newOption[index] = {
				...newOption[index],
				selected: !newOption[index].selected,
			};
			setOption(newOption);
			setPage(1);
		}
	};
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
					<Stack direction={'row'} spacing={1}>
					<Chip label="TẤT CẢ"  sx={{bgcolor:variables.mainlightercolor, color:'white',fontWeight:'bold'}} onClick={() => handleOptionSelected(4)}/>
					<Chip label="CHẤP NHẬN" sx={{bgcolor:variables.textgreencolor, color:'white',fontWeight:'bold'}}  onClick={() => handleOptionSelected(2)}/>
					<Chip label="CHỜ DUYỆT" sx={{bgcolor:variables.orangecolor, color:'white',fontWeight:'bold'}} onClick={() => handleOptionSelected(1)}/>
					<Chip label="TỪ CHỐI"  sx={{bgcolor:variables.redcolor, color:'white',fontWeight:'bold'}} onClick={() => handleOptionSelected(3)}/>
					</Stack>
					<Divider/>
					{withdrawlist.map((item) =>(<WithdrawItem item={item}/>))}
					<Pagination count={totalpage} shape="rounded" sx={{ alignSelf: 'center', justifySelf: 'flex-end' }} onChange={handleChange}/>
				</Stack>
			</Paper>
		</Box>
	);
}

export default WithdrawTable;
