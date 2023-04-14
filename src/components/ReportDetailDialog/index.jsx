import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Stack,
	Typography,
	Checkbox,
	FormControlLabel,
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import * as React from 'react';
import apiRegister from 'apis/apiRegister';
import { toast } from 'react-toastify';
import numWithDot from 'utils/numWithDot';
import numWithSpace from 'utils/numWithSpace';
import StarIcon from '@mui/icons-material/Star';
import apiReport from 'apis/apiReport';
import apiCar from 'apis/apiCar';
import apiUser from 'apis/apiUser';
import ConfirmDialog from 'components/ConfirmDialog';

function ReportDetailDialog(props) {
	const { openDialog, setOpenDialog, id } = props;
	const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);
	const [reportdata, setReportdata] = React.useState({});
	const [cardata, setCardata] = React.useState({});
	const [handleApi, setHandleApi] = React.useState(() => () => {
		handlePostpone();
	});
	const [text, setText] = React.useState('');

	const returnState = (state) => {
		if (state == true) {
			return true
		}
		return false;
	}

	const transmission = (transmissiontype) => {
		switch (transmissiontype) {
			case 'AUTO':
				return 'Tự động';
			case 'MANUAL':
				return 'Số sàn';
		}
	};

	const fuel = (fueltype) => {
		switch (fueltype) {
			case 'GASOLINE':
				return 'Xăng';
			case 'DIESEL':
				return 'Dầu Diesel';
			case 'ELECTRIC':
				return 'Điện';
		}
	};

	const gender = (gender) => {
		switch (gender) {
			case 'MALE':
				return 'Nam';
			case 'FEMALE':
				return 'Nữ';
			default:
				return 'Nam';
		}
	};

	React.useEffect(() => {
		const getreportDetail = () => {
			const params = {
				id: id,
			};
			apiReport
				.getReportDetail(params)
				.then((result) => {
					setReportdata(result.data);
					console.log(result.data);
				})
				.catch((err) => {
					setOpenDialog(false);
					toast.error(err.response.data.message);
				});
		};
		getreportDetail();
	}, []);

	React.useEffect(() => {
		const getCarDetail = () => {
			if (reportdata.vehicleId) {
				const params = {
					id: reportdata.vehicleId,
				};
				apiCar
					.getCarDetail(params)
					.then((result) => {
						setCardata(result.data);
					})
					.catch((err) => {
						setOpenDialog(false);
						toast.error(err.response.data.message);
					});
			}
		};
		getCarDetail();
	}, [reportdata]);

	const handleDeny = () => {
		const params = {
			id: id,
		};
		apiReport
			.denyReport(params)
			.then((result) => {
				toast.success('Xóa báo cáo xấu thành công !!!');
				setOpenDialog(false);
				setTimeout(() => {
					window.location.reload(false);
				}, 2000);
			})
			.catch((err) => {
				setOpenDialog(false);
				toast.error(err.response.data.message);
			});
	};

	const handleAccept = () => {
		const params = {
			id: id,
		};
		apiReport
			.acceptReport(params)
			.then((result) => {
				toast.success('Xử lý báo xấu thành công !!!');
				setOpenDialog(false);
				setTimeout(() => {
					window.location.reload(false);
				}, 2000);
			})
			.catch((err) => {
				setOpenDialog(false);
				toast.error(err.response.data.message);
			});
	};

	const handlePostpone = () => {
		const params = {
			id: cardata.ownerId._id,
		};
		apiUser
			.postponeUser(params)
			.then((res) => {
				toast.success('Tạm khoá tài khoản thành công!!!');
				setTimeout(() => {
					window.location.reload(false);
				}, 2000);
			})
			.catch((err) => toast.error(err.response.data.message));
	};

	const handleDelete = () => {
		const params = {
			id: cardata.ownerId._id,
		};
		apiUser
			.deleteUser(params)
			.then((res) => {
				toast.success('Xoá tài khoản thành công!!!');
				setTimeout(() => {
					window.location.reload(false);
				}, 2000);
			})
			.catch((err) => toast.error(err.response.data.message));
	};

	const handleDeleteCar = () => {
		const params = {
			id: cardata._id
		}
		apiCar.deleteCar(params).then(res => {
			toast.success('Xoá tài khoản thành công!!!')
			setTimeout(() => {window.location.reload(false)},2000)
		}).catch(err => toast.error(err.response.data.message))
	}

	const handlePostponeCar = () => {
		const params = {
			id: cardata._id
		}
		apiCar.postponeCar(params).then(res => {
			toast.success('Tạm dừng cho thuê xe thành công!!!')
			setTimeout(() => {window.location.reload(false)},2000)
		}).catch(err => toast.error(err.response.data.message))
	}
	return (
		<Dialog
			open={openDialog}
			maxWidth="lg"
			fullWidth
			onClose={() => setOpenDialog(false)}
			className="reportdetail-container"
		>
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					CHI TIẾT BÁO XẤU
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack spacing={1}>
					<Typography className="reportdetail-container__tilte">THÔNG TIN CHỦ XE</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Họ và tên:</span> {cardata.ownerId && cardata.ownerId.username}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Email:</span> {cardata.ownerId && cardata.ownerId.email}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Số điện thoại:</span> {cardata.ownerId && cardata.ownerId.phoneNumber}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Giới tính:</span> {cardata.ownerId && cardata.ownerId.gender}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Giới tính:</span> {cardata.ownerId && cardata.ownerId.location}
					</Typography>
					<Stack direction={'row'} justifyContent="center" spacing={2}>
						<Button
							variant="outlined"
							size="medium"
							className="useritem-container__block"
							onClick={() => {
								setText('Bạn có muốn khoá tài khoản này ?');
								setHandleApi(() => () => {
									handlePostpone();
								});
								setOpenConfirmDialog(true);
							}}
							sx={{
								borderColor: variables.orangecolor,
								color: variables.orangecolor,
								fontWeight: 'bold',
								width: '150px ',
								alignSelf: 'center',
							}}
						>
							KHOÁ
						</Button>
						<Button
							variant="outlined"
							size="medium"
							className="useritem-container__delete"
							onClick={() => {
								setText('Bạn có muốn xoá tài khoản này ?');
								setHandleApi(() => () => {
									handleDelete();
								});
								setOpenConfirmDialog(true);
							}}
							sx={{
								borderColor: variables.redcolor,
								color: variables.redcolor,
								fontWeight: 'bold',
								width: '150px ',
								alignSelf: 'center',
							}}
						>
							XOÁ
						</Button>
					</Stack>
					<Typography className="reportdetail-container__tilte">THÔNG TIN XE</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Đánh giá:</span> {cardata.rating}
						<StarIcon htmlColor={variables.mainyellowcolor} fontSize="medium" className="caritem-container__icon" />
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Giá thuê xe:</span> {cardata.rentprice && numWithDot(cardata.rentprice)} đ /ngày
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Biển số xe:</span> {cardata.licenseplate}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Hãng xe:</span> {cardata.brand}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Mẫu xe:</span> {cardata.model}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Năm sản xuất:</span> {cardata.year}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Kiểu xe:</span> {cardata.type}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Số ghế:</span> {cardata.seats}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Truyền động:</span> {transmission(cardata.transmission)}
					</Typography>
					<Typography className="reportdetail-container__text">
						<span className="title">Loại nhiên liệu:</span> {fuel(cardata.fueltype)}
					</Typography>
					<Typography className="reportdetail-container__text">
						<pre style={{ fontFamily: 'inherit', margin: 0 }}>
							<span className="title">Mô tả:</span> {cardata.description}
						</pre>
					</Typography>
					<Typography className="reportdetail-container__text">
						<pre style={{ fontFamily: 'inherit', margin: 0 }}>
							<span className="title">Điều khoản thuê xe:</span>
							{cardata.rentterm}
						</pre>
					</Typography>
					<Typography align="center" className="reportdetail-container__text">
						Ảnh mặt trước
					</Typography>
					<img
						className="reportdetail-container__img"
						src={
							cardata.vehicleimage &&
							(cardata.vehicleimage[0]
								? cardata.vehicleimage[0]
								: 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/p8dimfuyKkuCDVTBJXllqA.jpg')
						}
					></img>
					<Typography align="center" className="reportdetail-container__text">
						Ảnh mặt sau
					</Typography>
					<img
						className="reportdetail-container__img"
						src={
							cardata.vehicleimage &&
							(cardata.vehicleimage[1]
								? cardata.vehicleimage[1]
								: 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/iot31_kGM2egPW8Y13plRg.jpg')
						}
					></img>
					<Typography align="center" className="reportdetail-container__text">
						Ảnh bên trái
					</Typography>
					<img
						className="reportdetail-container__img"
						src={
							cardata.vehicleimage &&
							(cardata.vehicleimage[2]
								? cardata.vehicleimage[2]
								: 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/ZqO0x5znjDiQmAXm-TZImA.jpg')
						}
					></img>
					<Typography align="center" className="reportdetail-container__text">
						Ảnh bên phải
					</Typography>
					<img
						className="reportdetail-container__img"
						src={
							cardata.vehicleimage &&
							(cardata.vehicleimage[3]
								? cardata.vehicleimage[3]
								: 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/Q4d90YuvqmySKM6antvEhA.jpg')
						}
					></img>
					<Stack direction={'row'} justifyContent="center" spacing={2}>
						<Button
							variant="outlined"
							size="medium"
							className="caritem-container__block"
							onClick={() => {
								setText('Bạn có muốn tạm dừng cho thuê xe này ?');
								setHandleApi(() => () => {
									handlePostponeCar();
								});
								setOpenConfirmDialog(true);
							}}
							sx={{
								borderColor: variables.orangecolor,
								color: variables.orangecolor,
								fontWeight: 'bold',
								width: '150px ',
								alignSelf: 'center',
							}}
						>
							TẠM DỪNG
						</Button>
						<Button
							variant="outlined"
							size="medium"
							className="caritem-container__delete"
							onClick={() => {
								setText('Bạn có muốn xoá xe này ?');
								setHandleApi(() => () => {
									handleDeleteCar();
								});
								setOpenConfirmDialog(true);
							}}
							sx={{
								borderColor: variables.redcolor,
								color: variables.redcolor,
								fontWeight: 'bold',
								width: '150px ',
								alignSelf: 'center',
							}}
						>
							XOÁ
						</Button>
					</Stack>
					<Typography className="reportdetail-container__tilte">NỘI DUNG BÁO XẤU</Typography>
					<Stack>
						<FormControlLabel
							control={<Checkbox size="small" inputProps={{ onClick: 'return false;' }} />}
							label="Chất lượng xe"
							checked={returnState(reportdata.quality)}
						/>
						<FormControlLabel
							control={<Checkbox size="small" inputProps={{ onClick: 'return false;' }} />}
							label="Giá cả không rõ ràng"
							checked={returnState(reportdata.price)}
						/>
						<FormControlLabel
							control={<Checkbox size="small" inputProps={{ onClick: 'return false;' }} />}
							label="Giao xe, lấy xe không đúng giờ"
							checked={returnState(reportdata.owner)}
						/>
						<FormControlLabel
							control={<Checkbox size="small" inputProps={{ onClick: 'return false;' }} />}
							label="Khác"
							checked={returnState(reportdata.other)}
						/>
					</Stack>
					<Typography className="reportdetail-container__text">
						<pre style={{ fontFamily: 'inherit', margin: 0 }}>
							<span className="title">Lý do báo xấu:</span> {reportdata.comment}
						</pre>
					</Typography>
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
							XÓA BÁO XẤU
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
							XỬ LÝ
						</Button>
					</Stack>
				</Stack>
			</DialogContent>
			{openConfirmDialog && (
				<ConfirmDialog
					openConfirmDialog={openConfirmDialog}
					setOpenConfirmDialog={setOpenConfirmDialog}
					text={text}
					handleApi={handleApi}
				/>
			)}
		</Dialog>
	);
}

export default ReportDetailDialog;
