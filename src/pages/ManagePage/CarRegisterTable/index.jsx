import SearchIcon from '@mui/icons-material/Search';
import {
	Box,
	Button, Divider, InputAdornment, Pagination, Paper, Stack,
	TextField
} from '@mui/material';
import apiRegister from 'apis/apiRegister';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import CarRegisterItem from './CarRegisterItem';
import './style.scss';
import * as React from 'react';

function CarRegisterTable() {
	const [registerlist, setRegisterlist] = React.useState([]);
	const [page,setPage] = React.useState(1);
	const [totalpage, setTotalpage] = React.useState(1);
	const [query, setQuery] = React.useState("");
	const handleChange = (event, value) => {
		setPage(value);
	};

	React.useEffect(() => {
		const getRegisterList = () => {
			const params = {
				page: page,
				query: query,
			}
			apiRegister.getRegisterList(params).then((result) => {
				setRegisterlist(result.data)
				if(result.totalPage != 0) {
					setTotalpage(result.totalPage)
				}
			}).catch((err) => {
				
			});
		}
		getRegisterList();
	},[page])

	const handleFind = () => {
		setPage(1);
		const params = {
			page: 1,
			query: query,
		}
		apiRegister.getRegisterList(params).then((result) => {
			setRegisterlist(result.data)
			if(result.totalPage != 0) {
				setTotalpage(result.totalPage)
			} else {
				setTotalpage(1)
			}
		}).catch((err) => {
			
		});
	}

	return (
		<Box className="carregister-container">
			<Paper elevation={3} sx={{ width: '100%', height: '100%' }}>
				<Stack padding={2} spacing={1}>
					<Stack direction="row" spacing={1}>
						<TextField
							size="small"
							className="carregister-container__findfield"
							placeholder="Nhập vào hãng, mẫu xe, kiểu xe, biển số xe"
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
					{registerlist.map((item) =>(<CarRegisterItem item={item}/>))}
					<Pagination count={totalpage} shape="rounded" sx={{ alignSelf: 'center', justifySelf: 'flex-end' }} onChange={handleChange} />
				</Stack>
			</Paper>
		</Box>
	);
}

export default CarRegisterTable;
