import Sidebard from "../Sidebar";
import { PersonFill, PersonCheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { UserInfoContentStyled } from "./Styled.UserInfo";

const UserInfo = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <PersonCheckFill/>},
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