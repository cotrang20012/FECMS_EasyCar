import {
	Button,
	Dialog,
	DialogContent, DialogTitle,
	Stack,
	Typography
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import StarIcon from "@mui/icons-material/Star";

function CarDetailDialog(props) {
    const { openDialog, setOpenDialog } = props;
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
  return (
    <Dialog open={openDialog} maxWidth="lg" fullWidth onClose={() => setOpenDialog(false)} className="caritem-container">
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					CHI TIẾT THÔNG TIN ĐĂNG KÝ XE
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack spacing={1}>
					<Typography className="caritem-container__tilte">THÔNG TIN CHỦ XE</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Họ và tên:</span> Nguyễn Phúc An
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Email:</span> cotrang2012@gmail.com
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Số điện thoại:</span> 0928776640
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Giới tính:</span> Nam
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Địa chỉ:</span> 153 Lê Hoàng Phái, Phường 17, Quận Gò Vấp
					</Typography>
					<Typography className="caritem-container__tilte">THÔNG TIN XE</Typography>
                    <Typography className="caritem-container__text">
						<span className="title">Đánh giá:</span> 5.0<StarIcon
                      htmlColor={variables.mainyellowcolor}
                      fontSize="medium"
                      className="caritem-container__icon"
                    />
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Biển số xe:</span> Mazda
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Hãng xe:</span> Mazda
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Mẫu xe:</span> CX-3
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Năm sản xuất:</span> 2019
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Kiểu xe:</span> SUV-5
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Số ghế:</span> 5
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Truyền động:</span> Tự động
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Loại nhiên liệu:</span> Xăng
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Mô tả:</span> Xe mới mua
					</Typography>
					<Typography className="caritem-container__text">
						<span className="title">Điều khoản thuê xe:</span> Không cho thú cưng
					</Typography>
					<Typography align="center" className="caritem-container__text">
						Ảnh mặt trước
					</Typography>
					<img className="caritem-container__img" src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/p8dimfuyKkuCDVTBJXllqA.jpg' ></img>
                    <Typography align="center" className="caritem-container__text">
						Ảnh mặt sau
					</Typography>
					<img className="caritem-container__img" src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/iot31_kGM2egPW8Y13plRg.jpg' ></img>
                    <Typography align="center" className="caritem-container__text">
						Ảnh bên trái
					</Typography>
					<img className="caritem-container__img" src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/ZqO0x5znjDiQmAXm-TZImA.jpg' ></img>
                    <Typography align="center" className="caritem-container__text">
						Ảnh bên phải
					</Typography>
					<img className="caritem-container__img" src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2021/p/g/2022/01/06/11/Q4d90YuvqmySKM6antvEhA.jpg' ></img>
				</Stack>
			</DialogContent>
		</Dialog>
  )
}

export default CarDetailDialog