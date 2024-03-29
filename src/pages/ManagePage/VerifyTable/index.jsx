import * as React from 'react';
import './style.scss';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import {
	Box,
	Button,
	Divider,
	InputAdornment,
	Stack,
	TextField,
	Paper,
	Pagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VerifyItem from './VerifyItem';
import apiVerify from 'apis/apiVerify';
function VerifyTable() {
	const [verifylist, setVerifylist] = React.useState([]);
	const [page,setPage] = React.useState(1);
	const [totalpage, setTotalpage] = React.useState(1);
	const [query, setQuery] = React.useState("");
	const handleChange = (event, value) => {
		setPage(value);
	};

	React.useEffect(() => {
		const getVerifyList = () => {
			const params = {
				page: page,
				query: query,
			}
			apiVerify.getVerifyList(params).then((result) => {
				setVerifylist(result.data)
				if(result.totalPage != 0) {
					setTotalpage(result.totalPage)
				}
			}).catch((err) => {
				
			});
		}
		getVerifyList();
	},[page])
	
	const handleFind = () => {
		setPage(1);
		const params = {
			page: 1,
			query: query,
		}
		apiVerify.getVerifyList(params).then((result) => {
			setVerifylist(result.data)
			if(result.totalPage != 0) {
				setTotalpage(result.totalPage)
			} else {
				setTotalpage(1)
			}
		}).catch((err) => {
			
		});
	}

	return (
		<Box className="verifytable-container">
			<Paper elevation={3} sx={{ width: '100%', height: '100%' }}>
				<Stack padding={2} spacing={1}>
					<Stack direction="row" spacing={1}>
						<TextField
							size="small"
							className="verifytable-container__findfield"
							placeholder="Nhập vào họ tên, số GPLX"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon style={{ color: variables.maincolor }} />
									</InputAdornment>
								),
							}}
						></TextField>
						<Button variant="contained" onClick={handleFind}>TÌM KIẾM</Button>
					</Stack>
					<Divider />
					{verifylist.map((item) =>(<VerifyItem item={item}/>))}
					<Pagination count={totalpage} shape="rounded" sx={{ alignSelf: 'center', justifySelf: 'flex-end' }} onChange={handleChange}/>
				</Stack>
			</Paper>
		</Box>
	);
}

export default VerifyTable;
