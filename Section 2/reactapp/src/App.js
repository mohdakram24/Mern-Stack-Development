import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./components/Notfound";
import Login1 from "./components/Login1";
import Header from "./components/Header";
import EventHAndling from "./components/EventHAndling";
import Portfolio from "./components/Portfolio";
import ToDo from "./components/ToDo";
import ContactUs from "./components/ContactUs";
import Register from "./components/Register";
import UserManager from "./components/UserManager";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
        <Toaster position="top-right"/>
        
        <BrowserRouter>
          {/* <Link to="/homepage">Homepage</Link>
          <br />
          <Link to="/loginpage">Loginpage</Link> */}
          <Header/>
        <Routes>
          <Route element={<Home></Home>} path="homepage" />
          <Route element={<Home></Home>} path="/" />
          <Route element={<Login></Login>} path="loginpage" />
          <Route element={<Login1></Login1>} path="login_page" />
          <Route element={<EventHAndling/>} path="event" />
          <Route element={<Portfolio/>} path="portfolio" />
          <Route element={<Register/>} path="register" />
          <Route element={<ToDo/>} path="todo" />
          <Route element={<ContactUs/>} path="contactus" />
          <Route element={<UserManager/>} path="usermanager" />

          <Route element={<Notfound/>} path="*" />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
