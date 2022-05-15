import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { AsistenciaContentStyled } from "./Styled.Asistencia";

const Asistencia = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];

    return (
        <AsistenciaContentStyled>
            <Sidebard list={option}/>
            <div>content Asistencia</div>
        </AsistenciaContentStyled>
    );
}

export default Asistencia;