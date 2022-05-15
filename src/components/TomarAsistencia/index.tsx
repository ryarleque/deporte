import Sidebard from "../Sidebar";
import { PersonCheckFill, Clipboard2CheckFill } from 'react-bootstrap-icons';
import { TomarAsistenciaContentStyled } from "./Styled.TomarAsistencia";

const TomarAsistencia = () => {
    const option = [
        { name: "Asitencia", route:"/tomar-asistencia", image: <PersonCheckFill/> },
        { name: "Test", route:"/tests", image: <Clipboard2CheckFill/>},
    ];

    return (
        <TomarAsistenciaContentStyled>
            <Sidebard list={option}/>
            <div>content TOMAR ASISTENCIA</div>
        </TomarAsistenciaContentStyled>
    );
}

export default TomarAsistencia;