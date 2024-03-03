import { Route, Routes } from "react-router-dom";

import { UserProvider } from "@/contexts/UserContext";
import { DashboardProvider } from "@/contexts/DashboardContext";

import Main from "./Main";
import Dashboard from "./Dashboard";

function Root() {
  return (
    <UserProvider>
      <DashboardProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </DashboardProvider>
    </UserProvider>
  );
}

export default Root;
