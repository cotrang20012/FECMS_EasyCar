import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
	Avatar, Button, Paper, Stack, Typography, Divider
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
function CarItem() {
  return (
    <Paper className="caritem-container" variant={'outlined'} sx={{ borderColor: variables.maincolor }}>
    <Stack sx={{ height: '164px' }} direction="row" padding={1} spacing={2}>
      <Stack spacing={1} width="220px" justifyContent={'center'}>
        <Typography>
          <span className="bold">THÔNG TIN XE</span>
        </Typography>
        <Typography>
          <span className="bold">Biển số xe:</span> 59A-153.22
        </Typography>
        <Typography>
          <span className="bold">Hãng xe:</span> Mazda
        </Typography>
        <Typography>
          <span className="bold">Mẫu xe:</span> CX-3
        </Typography>
        <Typography>
                      <span className="bold">Năm sản xuất:</span> 2021
        </Typography>
      </Stack>
              <Stack spacing={1} width="250px" justifyContent={'center'}>
        <Typography>
          <span className="bold">Loại nhiên liệu:</span> Xăng
        </Typography>
        <Typography>
          <span className="bold">Tiêu thụ nhiên liệu:</span> 5.1 l/100km
        </Typography>
        <Typography>
                      <span className="bold">Truyền động:</span> Tự động
        </Typography>
        <Typography>
                  <span className="bold">Kiểu xe:</span> SUV
        </Typography>
                  <Typography>
          <span className="bold">Số ghế:</span> 4 Ghế
        </Typography>
      </Stack>
      <Divider orientation="vertical"/>
              <Stack spacing={1} width="220px" paddingTop="6px">
              <Typography>
          <span className="bold">THÔNG TIN TÀI KHOẢN</span>
        </Typography>
        <Typography>
          <span className="bold">E-mail:</span> annguyen@gmail.com
        </Typography>
        <Typography>
          <span className="bold">Họ và Tên:</span> Nguyễn Phúc An
        </Typography>
        <Typography>
          <span className="bold">Số điện thoại:</span> 0928776640
        </Typography>
      </Stack>
      <Stack flex={1} justifyContent={"center"} spacing={1}>
        <Button
          variant="outlined"
          size="medium"
          className="caritem-container__details"
          sx={{
            borderColor: variables.textgreencolor,
            color: variables.textgreencolor,
            fontWeight: 'bold',
            width: '150px ',
            alignSelf: 'center',
          }}
        >
          CHI TIẾT
        </Button>
        <Button
						variant="outlined"
						size="medium"
						className="caritem-container__block"
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
    </Stack>
  </Paper>
  )
}

export default CarItem