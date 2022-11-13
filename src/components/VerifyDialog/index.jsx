import {
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Stack,
	Typography,
	Avatar,
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import './style.scss';

function VerifyDialog(props) {
	const { openDialog, setOpenDialog } = props;
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
						<span className="title">Số GPLX:</span> 123456789
					</Typography>
					<Typography className="verify-container__text">
						<span className="title">Họ và Tên</span> Nguyễn Phúc An
					</Typography>
					<Typography className="verify-container__text">
						<span className="title">Ngày sinh:</span> 04/02/2001
					</Typography>
					<Typography className="verify-container__text">
						<span className="title">Ảnh mặt trước:</span>
					</Typography>
					<img
						className="verify-container__img"
						src="https://www.hoclaixetphcm.com/wp-content/uploads/2016/05/giay-phep-lai-xe-hang-a1.jpg"
					></img>
					<Stack direction={'row'} justifyContent="center" spacing={3} paddingTop={2}>
						<Button
							variant="standard"
							onClick={() => setOpenDialog(false)}
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
