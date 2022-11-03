import { BrowserRouter } from 'react-router-dom';
import ConfigRoute from 'ConfigRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { axiosInstance, axiosInstanceMultiPart } from 'apis/axiosClient';

function App() {
	const accessToken = useSelector((state) => state.auth.accessToken);
	const dispatch = useDispatch();
	if (accessToken) {
		axiosInstance(accessToken, dispatch);
		axiosInstanceMultiPart(accessToken);
	}
	return (
		<BrowserRouter>
			<ConfigRoute />
			<ToastContainer
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				pauseOnFocusLoss
				pauseOnHover={false}
			/>
		</BrowserRouter>
	);
}

export default App;
