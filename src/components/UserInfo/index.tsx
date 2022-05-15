import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { UserInfoContentStyled } from "./Styled.UserInfo";

const UserInfo = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];

    return (
        <UserInfoContentStyled>
            <Sidebard list={option}/>
            <div>content UserInfo</div>
        </UserInfoContentStyled>
    );
}

export default UserInfo;