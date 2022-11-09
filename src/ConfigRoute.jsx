import CarRegisterTable from "pages/ManagePage/CarRegisterTable";
import UserTable from "pages/ManagePage/UserTable";
import VerifyTable from "pages/ManagePage/VerifyTable";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ManagePage from "./pages/ManagePage";
import SigninPage from "./pages/SigninPage";


function ConfigRoute() {
  return (
    <Routes>
      <Route path="/" element={<SigninPage />} />
      <Route index element={<SigninPage />} />
      <Route path="dashboard" element={<ManagePage/>} >
        <Route index element={<UserTable />}/>
        <Route path="user" element={<UserTable />}/>
        <Route path="verify" element={<VerifyTable/>}/>
        <Route path="carregister" element={<CarRegisterTable/>}/>
      </Route>
    </Routes>
  );
}

export default ConfigRoute;
