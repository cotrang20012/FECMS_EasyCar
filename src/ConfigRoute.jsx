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
        <Route path="verifyrequest" element={<VerifyTable/>}/>
      </Route>
    </Routes>
  );
}

export default ConfigRoute;
