import {
  Button, Paper, Stack, Typography, Divider
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import CarDetailDialog from 'components/CarDetailDialog';
import './style.scss';
import * as React from 'react';
import ConfirmDialog from 'components/ConfirmDialog';
import { toast } from 'react-toastify';
import apiCar from 'apis/apiCar';
function CarItem(props) {
  const {item} = props
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);
	const [handleApi, setHandleApi] = React.useState(()=> () => {handlePostpone()})
	const [text, setText] = React.useState('')
	const handlePostpone = () => {
		const params = {
			id: item._id
		}
		apiCar.postponeCar(params).then(res => {
			toast.success('Tạm dừng cho thuê xe thành công!!!')
			setTimeout(() => {window.location.reload(false)},2000)
		}).catch(err => toast.error(err.response.data.message))
	}

	const handleResume = () => {
		const params = {
			id: item._id
		}
    
		apiCar.resumeCar(params).then(res => {
			toast.success('Tiếp tục cho thuê xe thành công!!!')
			setTimeout(() => {window.location.reload(false)},2000)
		}).catch(err => toast.error(err.response.data.message))
	}

	const handleDelete = () => {
		const params = {
			id: item._id
		}
    
		apiCar.deleteCar(params).then(res => {
			toast.success('Xoá tài khoản thành công!!!')
			setTimeout(() => {window.location.reload(false)},2000)
		}).catch(err => toast.error(err.response.data.message))
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

  const handleStatus = (status) => {
		switch (status) {
			case 2:
				return (<Button
          variant="outlined"
          size="medium"
          className="caritem-container__block"
          onClick={() => {
            setText('Bạn có muốn tạm dừng cho thuê xe này ?')
            setHandleApi(() => () => {handlePostpone()})
            setOpenConfirmDialog(true)
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
        </Button>)
			case 1:
				return ( <Button
          variant="outlined"
          size="medium"
          className="caritem-container__block"
          onClick={() => {
            setText('Bạn có muốn tiếp tục cho thuê xe này ?')
            setHandleApi(() => () => {handleResume()})
            setOpenConfirmDialog(true)
          }}
          sx={{
            borderColor: variables.orangecolor,
            color: variables.orangecolor,
            fontWeight: 'bold',
            width: '150px ',
            alignSelf: 'center',
          }}
        >
          TIẾP TỤC
        </Button>)
			case 0:
				return (<></>)
		}
	}
  return (
    <Paper className="caritem-container" variant={'outlined'} sx={{ borderColor: variables.maincolor }}>
    <Stack sx={{ height: '164px' }} direction="row" padding={1} spacing={2}>
      <Stack spacing={1} width="220px" justifyContent={'center'}>
        <Typography>
          <span className="bold">THÔNG TIN XE</span>
        </Typography>
        <Typography>
          <span className="bold">Biển số xe:</span> {item.licenseplate}
        </Typography>
        <Typography>
          <span className="bold">Hãng xe:</span> {item.brand}
        </Typography>
        <Typography>
          <span className="bold">Mẫu xe:</span> {item.model}
        </Typography>
        <Typography>
                      <span className="bold">Năm sản xuất:</span> {item.year}
        </Typography>
      </Stack>
              <Stack spacing={1} width="250px" justifyContent={'center'}>
        <Typography>
          <span className="bold">Loại nhiên liệu:</span> {fuel(item.fueltype)}
        </Typography>
        <Typography>
          <span className="bold">Tiêu thụ nhiên liệu:</span> {item.fuelconsumption} l/100km
        </Typography>
        <Typography>
                      <span className="bold">Truyền động:</span> {transmission(item.transmission)}
        </Typography>
        <Typography>
                  <span className="bold">Kiểu xe:</span> {item.type}
        </Typography>
                  <Typography>
          <span className="bold">Số ghế:</span> {item.seats} Ghế
        </Typography>
      </Stack>
      <Divider orientation="vertical"/>
              <Stack spacing={1} width="220px" paddingTop="6px">
              <Typography>
          <span className="bold">THÔNG TIN TÀI KHOẢN</span>
        </Typography>
        <Typography>
          <span className="bold">E-mail:</span> {item.ownerId.email}
        </Typography>
        <Typography>
          <span className="bold">Họ và Tên:</span> {item.ownerId.username}
        </Typography>
        <Typography>
          <span className="bold">Số điện thoại:</span> {item.ownerId.phoneNumber}
        </Typography>
      </Stack>
      <Stack flex={1} justifyContent={"center"} spacing={1}>
        <Button
          variant="outlined"
          size="medium"
          className="caritem-container__details"
          onClick={() => setOpenDialog(true)}
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
        {handleStatus(item.status)}
        <Button
          variant="outlined"
          size="medium"
          className="caritem-container__delete"
          onClick={() => {
            setText('Bạn có muốn xoá xe này ?')
            setHandleApi(() => () => {handleDelete()})
            setOpenConfirmDialog(true)
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
    </Stack>
    {openDialog && <CarDetailDialog openDialog={openDialog} setOpenDialog={setOpenDialog} id={item._id}/>}
    {openConfirmDialog && <ConfirmDialog openConfirmDialog={openConfirmDialog} setOpenConfirmDialog={setOpenConfirmDialog} text={text} handleApi={handleApi}/>}
  </Paper>
  )
}

export default CarItem