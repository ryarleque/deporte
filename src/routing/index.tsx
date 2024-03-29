import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActualizarUsuario from "../components/ActualizarUsuario";
import Asistencia from "../components/Asistencia";
import Costos from "../components/Costos";
import CreateUser from "../components/CreateUser";
import CustomFooter from "../components/CustomFooter";
import DetalleRendimiento from "../components/DetalleRendimiento";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Rendimiento from "../components/Rendimiento";
import Reporte from "../components/Reporte";
import Tests from "../components/Tests";
import TomarAsistencia from "../components/TomarAsistencia";
import UserInfo from "../components/UserInfo"

function Routing() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          

          <Route path="/costos" element={<Costos />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/reporte" element={<Reporte />} />

          <Route path="/tomar-asistencia" element={<Asistencia />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/actualizar-usuario" element={<ActualizarUsuario />} />
          <Route path="/registrar" element={<Register />}/>

          <Route path="/datos" element={<UserInfo />} />
          <Route path="/asistencia" element={<TomarAsistencia />} />
          <Route path="/rendimiento" element={<Rendimiento />} />
          <Route path="/detalle-rendimiento" element={<DetalleRendimiento />} />
        </Routes>
      </BrowserRouter>
      <CustomFooter/>
      </>
    );
  }
  
  export default Routing;
  