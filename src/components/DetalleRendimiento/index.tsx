import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { DetalleRendimientoContentStyled } from "./Styled.DetalleRendimiento";

const DetalleRendimiento = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];

    return (
        <DetalleRendimientoContentStyled>
            <Sidebard list={option}/>
            <div>content DetalleRendimiento</div>
        </DetalleRendimientoContentStyled>
    );
}

export default DetalleRendimiento;