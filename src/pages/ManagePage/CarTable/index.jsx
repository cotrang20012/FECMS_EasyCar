import SearchIcon from '@mui/icons-material/Search';
import {
	Box,
	Button, Divider, InputAdornment, Pagination, Paper, Stack,
	TextField
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import CarItem from './CarItem';
import './style.scss';
import * as React from 'react';
import apiCar from 'apis/apiCar';
function CarTable() {
	const [carlist, setCarlist] = React.useState([]);
	const [page,setPage] = React.useState(1);
	const [totalpage, setTotalpage] = React.useState(1);
	const handleChange = (event, value) => {
		setPage(value);
	};

	React.useEffect(() => {
		const getCarList = () => {
			const params = {
				page: page
			}
			apiCar.getCarList(params).then((result) => {
				setCarlist(result.data)
				if(result.totalPage != 0) {
					setTotalpage(result.totalPage)
				}
			}).catch((err) => {
				
			});
		}
		getCarList();
	},[page])
  return (
    <Box className="cartable-container">
			<Paper elevation={3} sx={{ width: '100%', height: '100%' }}>
				<Stack padding={2} spacing={1}>
					<Stack direction="row" spacing={1}>
						<TextField
							size="small"
							className="cartable-container__findfield"
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
					{carlist.map((item) =>(<CarItem item={item}/>))}
					<Pagination count={totalpage} shape="rounded" sx={{ alignSelf: 'center', justifySelf: 'flex-end' }} onChange={handleChange}/>
				</Stack>
			</Paper>
		</Box>
  )
}

export default CarTable