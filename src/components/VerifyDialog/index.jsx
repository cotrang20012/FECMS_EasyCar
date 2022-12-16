import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Stack,
	Typography,
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import { toast } from 'react-toastify';
import * as React from 'react';
import apiVerify from 'apis/apiVerify';

function VerifyDialog(props) {
	const { openDialog, setOpenDialog, id } = props;
	const [verifydata, setVerifydata] = React.useState({})

	const handleAccept = () => {
		const params = {
			id:id
		}
		apiVerify.acceptVerify(params).then((result) => {
			toast.success("Chấp nhận yêu cầu xác thực thành công !!!");
			setOpenDialog(false)
			setTimeout(() => {window.location.reload(false)},2000)
		}).catch((err) => {
			setOpenDialog(false)
			toast.error(err.response.data.message);
		});
	}

	const handleDeny = () => {
		const params = {
			id:id
		}
		apiVerify.denyVerify(params).then((result) => {
			toast.success("Từ chối yêu cầu xác thực thành công !!!");
			setOpenDialog(false)
			setTimeout(() => {window.location.reload(false)},2000)
		}).catch((err) => {
			setOpenDialog(false)
			toast.error(err.response.data.message);
		});
	}
	React.useEffect(() => {
		const getVerifyDetail = () => {
			const params = {
				id: id,
			}
			apiVerify.getVerifyDetail(params).then((result) => {
				setVerifydata(result.data)
			}).catch((err) => {
				setOpenDialog(false)
				toast.error(err.response.data.message);
			});
		}
		getVerifyDetail()
	},[])

	return (
		<Dialog open={openDialog} maxWidth="sm" fullWidth onClose={() => setOpenDialog(false)} className="verify-container">
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					CHI TIẾT YÊU CẦU XÁC THỰC
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack spacing={1}>
					<Typography className="verify-container__tilte">THÔNG TIN GIẤY PHÉP LÁI XE</Typography>
					<Typography className="verify-container__text">
						<span className="title">Số GPLX:</span> {verifydata.driverLicenseNumber}
					</Typography>
					<Typography className="verify-container__text">
						<span className="title">Họ và Tên</span> {verifydata.username}
					</Typography>
					<Typography className="verify-container__text">
						<span className="title">Ngày sinh:</span> {(new Date(verifydata.bod)).getDate()}/{(new Date(verifydata.bod)).getMonth()+1}/{(new Date(verifydata.bod)).getFullYear()}
					</Typography>
					<Typography className="verify-container__text">
						<span className="title">Ảnh mặt trước:</span>
					</Typography>
					<img
						className="verify-container__img"
						src={verifydata.driverLicenseImg ? verifydata.driverLicenseImg : "https://www.hoclaixetphcm.com/wp-content/uploads/2016/05/giay-phep-lai-xe-hang-a1.jpg"}
					></img>
					<Stack direction={'row'} justifyContent="center" spacing={3} paddingTop={2}>
						<Button
							variant="standard"
							onClick={handleDeny}
							sx={{
								width: '300px',
								bgcolor: '#f34a38',
								color: '#FFFFFF',
								'&.MuiButtonBase-root:hover': {
									bgcolor: '#f34a38',
								},
							}}
						>
							TỪ CHỐI
						</Button>
						<Button
							variant="standard"
							onClick={handleAccept}
							sx={{
								width: '300px',
								bgcolor: variables.textgreencolor,
								color: '#FFFFFF',
								'&.MuiButtonBase-root:hover': {
									bgcolor: variables.textgreencolor,
								},
							}}
						>
							CHẤP NHẬN
						</Button>
					</Stack>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default VerifyDialog;
