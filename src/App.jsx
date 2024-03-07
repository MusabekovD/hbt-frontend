import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HotelsPage from "./pages/Hotel/HotelsPage";
import HotelDetail from "./components/Hotels/HotelDetail";
import HomePage from "./pages/Hotel/HomePage";
import BathroomPage from "./pages/Bathrooms/BathroomPage";
import BathroomDetails from "./components/Bathrooms/BathroomDetails";
import SignUp from "./components/Auth/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import LogIn from "./components/Auth/LogIn";
import GlobalContextProvider from "./context/GlobalContextProvider";

function App() {
  return (
    <>
      <Router>
        <GlobalContextProvider>
          <AuthContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hotels" element={<HotelsPage />} />
              <Route path="/hotels/:id" element={<HotelDetail />} />
              <Route path="/bathrooms" element={<BathroomPage />} />
              <Route path="/bathroom/:id" element={<BathroomDetails />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/logIn" element={<LogIn />} />
            </Routes>
          </AuthContextProvider>
        </GlobalContextProvider>
      </Router>
    </>
  );
}

export default App;
