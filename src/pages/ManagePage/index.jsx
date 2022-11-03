import * as React from 'react';
import './style.scss';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import Sidebar from './Sidebar';
function ManagePage() {
  return (
    <Box height='100vh'>
        <Stack direction='row' className="manage-container" height="100%" spacing={2}>
            <Sidebar/>
        </Stack>
    </Box>
  )
}

export default ManagePage