import Sidebard from "../Sidebar";
import { PersonCheckFill, StickiesFill } from 'react-bootstrap-icons';
import { TestContentStyled } from "./StyledTest";

const Tests = () => {
    const option = [
        { name: "Asitencia", route:"/tomar-asistenciar", image: <PersonCheckFill/> },
        { name: "Test", route:"/tests", image: <StickiesFill/>},
    ];

    return (
        <TestContentStyled>
            <Sidebard list={option}/>
            <div>content TEST</div>
        </TestContentStyled>
    );
}

export default Tests;