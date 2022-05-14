import Sidebard from "../Sidebar";
import { PersonPlusFill, WalletFill, BarChartFill } from 'react-bootstrap-icons';
import { CostosContentStyled } from "./StyledCostos";

const Costos = () => {
    const option = [
        { name: "Usuario", route:"/create-user", image: <PersonPlusFill/> },
        { name: "Costos", route:"/costos", image: <WalletFill/>},
        { name: "Reporte", route:"/reporte", image: <BarChartFill/>}
    ];

    return (
        <CostosContentStyled>
            <Sidebard list={option}/>
            <div>content COSTOS</div>
        </CostosContentStyled>
    );
}

export default Costos;