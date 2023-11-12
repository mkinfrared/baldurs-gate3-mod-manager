import { Navigate, Route, Routes } from "react-router-dom";

import { BaldursGate3, Settings } from "@renderer/pages";

import { APP_ROUTES } from "./AppRoutes.type";

const AppRoutes = () => (
  <Routes>
    <Route path={APP_ROUTES.BaldursGate3.path} element={<BaldursGate3 />} />
    <Route
      path={APP_ROUTES.BaldursGate3.SETTINGS.path}
      element={<Settings game="BG3" />}
    />
    <Route path="*" element={<Navigate to={APP_ROUTES.BaldursGate3.path} />} />
  </Routes>
);

export { AppRoutes };
