import Sidebard from "../Sidebar";
import { PersonCheckFill, StickiesFill } from 'react-bootstrap-icons';
import { TomarAsistenciaContentStyled } from "./Styled.TomarAsistencia";

const TomarAsistencia = () => {
    const option = [
        { name: "Asitencia", route:"/tomar-asistenciar", image: <PersonCheckFill/> },
        { name: "Test", route:"/tests", image: <StickiesFill/>},
    ];

    return (
        <TomarAsistenciaContentStyled>
            <Sidebard list={option}/>
            <div>content TOMAR ASISTENCIA</div>
        </TomarAsistenciaContentStyled>
    );
}

export default TomarAsistencia;