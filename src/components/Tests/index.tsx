import Sidebard from "../Sidebar";
import { PersonCheckFill, Clipboard2CheckFill } from 'react-bootstrap-icons';
import { TestContentStyled } from "./StyledTest";

const Tests = () => {
    const option = [
        { name: "Asitencia", route:"/tomar-asistencia", image: <PersonCheckFill/> },
        { name: "Test", route:"/tests", image: <Clipboard2CheckFill/>},
    ];

    return (
        <TestContentStyled>
            <Sidebard list={option}/>
            <div>content TEST</div>
        </TestContentStyled>
    );
}

export default Tests;