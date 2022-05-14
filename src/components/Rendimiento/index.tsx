import Sidebard from "../Sidebar";
import { PersonFill, PersonCheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { RendimientoContentStyled } from "./Styled.Rendimiento";

const Rendimiento = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <PersonCheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];

    return (
        <RendimientoContentStyled>
            <Sidebard list={option}/>
            <div>content Rendimiento</div>
        </RendimientoContentStyled>
    );
}

export default Rendimiento;