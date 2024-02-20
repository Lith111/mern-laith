import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Singnup } from "./pages/Signup";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Signin } from "./pages/SignIn";
import Header from "./components/Header";
// ..................
// routre all page {home , profile , signin , signup  ,about}
// add haeder static of all pages
//
//
//
//
//
//
//
//
//
//
// ..................
export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Singnup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
