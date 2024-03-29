import SearchIcon from '@mui/icons-material/Search';
import {
	Box,
	Button, Divider, InputAdornment, Pagination, Paper, Stack,
	TextField
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import UserItem from './UserItem';
import * as React from 'react';
import apiUser from 'apis/apiUser';
function UserTable() {
	const [userlist, setUserlist] = React.useState([]);
	const [page,setPage] = React.useState(1);
	const [totalpage, setTotalpage] = React.useState(1);
	const [query, setQuery] = React.useState("");
	const handleChange = (event, value) => {
		setPage(value);
	};

	React.useEffect(() => {
		const getUserList = () => {
			const params = {
				page: page,
				query: query,
			}
			apiUser.getUserList(params).then((result) => {
				setUserlist(result.data)
				if(result.totalPage != 0) {
					setTotalpage(result.totalPage)
				}
			}).catch((err) => {
				
			});
		}
		getUserList();
	},[page])

	const handleFind = () => {
		setPage(1);
		const params = {
			page: 1,
			query: query,
		}
		apiUser.getUserList(params).then((result) => {
			setUserlist(result.data)
			if(result.totalPage != 0) {
				setTotalpage(result.totalPage)
			} else {
				setTotalpage(1)
			}
		}).catch((err) => {
			
		});
	}

	return ( 
		<Box className="usertable-container">
			<Paper elevation={3} sx={{ width: '100%', height: '100%' }}>
				<Stack padding={2} spacing={1} >
                    <Stack direction='row' spacing={1}>
                    <TextField
						size="small"
						className="usertable-container__findfield"
                        placeholder='Nhập vào số điện thoại, họ tên, email, địa chỉ'
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
                    <Divider/>
					{userlist.map((item) =>(<UserItem item={item}/>))}
					<Pagination count={totalpage} shape="rounded" sx={{alignSelf:'center', justifySelf:'flex-end'}} onChange={handleChange} />
				</Stack>
			</Paper>
		</Box>
	);
}

export default UserTable;
