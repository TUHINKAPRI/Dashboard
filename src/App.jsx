import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/dashboardpage/Dashboard";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
