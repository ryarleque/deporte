import { BrowserRouter, Route, Routes } from "react-router-dom";
import Asistencia from "../components/Asistencia";
import Costos from "../components/Costos";
import CreateUser from "../components/CreateUser";
import DetalleRendimiento from "../components/DetalleRendimiento";
import Home from "../components/Home";
import Login from "../components/Login";
import Rendimiento from "../components/Rendimiento";
import Reporte from "../components/Reporte";
import Tests from "../components/Tests";
import TomarAsistencia from "../components/TomarAsistencia";
import UserInfo from "../components/UserInfo";
const isLogged = false

function Routing() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>

          <Route path="/costos" element={<Costos />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/reporte" element={<Reporte />} />

          <Route path="/tomar-asistencia" element={<TomarAsistencia />} />
          <Route path="/tests" element={<Tests />} />

          <Route path="/datos" element={<UserInfo />} />
          <Route path="/asistencia" element={<Asistencia />} />
          <Route path="/rendimiento" element={<Rendimiento />} />
          <Route path="/detalle-rendimiento" element={<DetalleRendimiento />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Routing;
  