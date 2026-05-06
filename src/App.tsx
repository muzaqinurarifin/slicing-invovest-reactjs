import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ManageCompetitions from "./pages/admin/ManageCompetitions";
import ManageSeminar from "./pages/admin/ManageSeminar";
import ManageWorkshop from "./pages/admin/ManageWorkshop";
import ManageTalkshow from "./pages/admin/ManageTalkshow";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* landing page */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        {/* auth page */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* admin page */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="competitions" element={<ManageCompetitions />} />
          <Route path="seminars" element={<ManageSeminar />} />
          <Route path="workshops" element={<ManageWorkshop />} />
          <Route path="talkshows" element={<ManageTalkshow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
