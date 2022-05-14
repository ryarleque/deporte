import Sidebard from "../Sidebar";
import { PersonPlusFill, WalletFill, BarChartFill } from 'react-bootstrap-icons';
import { CreateUserContentStyled } from "./StyledCreateUser";

const CreateUser = () => {
    const option = [
        { name: "Usuario", route:"/create-user", image: <PersonPlusFill/> },
        { name: "Costos", route:"/costos", image: <WalletFill/>},
        { name: "Reporte", route:"/reporte", image: <BarChartFill/>}
    ];

    return (
        <CreateUserContentStyled>
            <Sidebard list={option}/>
            <div>content CreateUser</div>
        </CreateUserContentStyled>
    );
}

export default CreateUser;