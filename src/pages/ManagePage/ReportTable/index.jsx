import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, InputAdornment, Pagination, Paper, Stack, TextField, Chip } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import * as React from 'react';
import ReportItem from './ReportItem';
import apiReport from 'apis/apiReport';

function ReportTable() {
	const [reportlist, setReportlist] = React.useState([]);
	const [page, setPage] = React.useState(1);
	const [totalpage, setTotalpage] = React.useState(1);
	const [option, setOption] = React.useState([
		{
			id: 1,
			value: 'ALL',
			selected: false,
		},
		{
			id: 2,
			value: 'true',
			selected: false,
		},
		{
			id: 3,
			value: 'false',
			selected: true,
		},
	]);

	const handleChange = (event, value) => {
		setPage(value);
	};

    React.useEffect(() => {
		const getReportList = () => {
			console.log(option)
			const params = {
				page: page,
				option: option,
			}
			apiReport.getReportList(params).then((result) => {
				setReportlist(result.data.data)
				if(result.data.totalPage != 0) {
					setTotalpage(result.data.totalPage)
				}
			}).catch((err) => {
				
			});
		}
		getReportList();
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
		<Box className="reporttable-container">
			<Paper elevation={3} sx={{ width: '100%', height: '100%' }}>
				<Stack padding={2} spacing={1}>
					<Stack direction="row" spacing={1}>
						<TextField
							size="small"
							className="reporttable-container__findfield"
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
					<Stack direction={'row'} spacing={1}>
					<Chip label="TẤT CẢ"  sx={{bgcolor:variables.mainlightercolor, color:'white',fontWeight:'bold'}} onClick={() => handleOptionSelected(1)}/>
					<Chip label="CHẤP NHẬN" sx={{bgcolor:variables.textgreencolor, color:'white',fontWeight:'bold'}}  onClick={() => handleOptionSelected(2)}/>
					<Chip label="CHỜ DUYỆT" sx={{bgcolor:variables.orangecolor, color:'white',fontWeight:'bold'}} onClick={() => handleOptionSelected(3)}/>
					</Stack>
					<Divider />
					{reportlist.map((item) =>(<ReportItem item={item} />))}
					<Pagination count={totalpage} shape="rounded" sx={{ alignSelf: 'center', justifySelf: 'flex-end' }} onChange={handleChange}/>
				</Stack>
			</Paper>
		</Box>
	);
}

export default ReportTable;
