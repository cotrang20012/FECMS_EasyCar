import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, InputAdornment, Pagination, Paper, Stack, TextField } from '@mui/material';
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
	const handleChange = (event, value) => {
		setPage(value);
	};

    React.useEffect(() => {
		const getReportList = () => {
			const params = {
				page: page
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
	},[page])

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
					<Divider />
					{reportlist.map((item) =>(<ReportItem item={item} />))}
					<Pagination count={totalpage} shape="rounded" sx={{ alignSelf: 'center', justifySelf: 'flex-end' }} onChange={handleChange}/>
				</Stack>
			</Paper>
		</Box>
	);
}

export default ReportTable;
