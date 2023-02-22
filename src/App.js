import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import renderRoutes from "./routes";
import { Suspense } from "react";


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
          {/* HomeTemPlate */}
          {/* <Route path="" element={<HomeTemPlate />}>
          <Route path="" element={<HomePages />} />
          <Route path="about" element={<AboutPages />} />
          <Route path="list-movie" element={<ListMoviePages />} />
        </Route> */}
          {/* End HomeTemPlate */}

          {/* AdminTemPlate */}
          {/* <Route path="admin" element={<AdminTemPlate />}>
          <Route path="add-movie" element={<AddMoviePage />} />
          <Route path="add-user" element={<AddUserPage />} />
          <Route path="dashboard" element={<DashBoardPage />} />
        </Route> */}
          {/* End AdminTemPlate */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
