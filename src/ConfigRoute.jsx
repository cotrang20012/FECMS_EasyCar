import React from "react";
import { Route, Routes } from "react-router-dom";
import ManagePage from "./pages/ManagePage";
import SigninPage from "./pages/SigninPage";


function ConfigRoute() {
  return (
    <Routes>
      <Route path="/" element={<SigninPage />} />
      <Route index element={<SigninPage />} />
      <Route path="manage" element={<ManagePage/>} />
    </Routes>
  );
}

export default ConfigRoute;
