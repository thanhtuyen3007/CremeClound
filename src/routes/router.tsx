import { Routes, Route } from "react-router";

import MainLayout from "@/layout/MainLayout.tsx";
import Home from "@/pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      {/* USER ROUTES */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* ADMIN ROUTES */}
      {/* <Route path="/admin" element={<AdminLayout />}>
          <Route path="products" element={<AdminProducts />} />
        </Route> */}
    </Routes>
  );
};

export default AppRouter;
