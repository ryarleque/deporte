import Sidebard from "../Sidebar";
import { PersonPlusFill, WalletFill, BarChartFill } from 'react-bootstrap-icons';
import { ReporteContentStyled } from "./StyledReporte";

const Reporte = () => {
    const option = [
        { name: "Usuario", route:"/create-user", image: <PersonPlusFill/> },
        { name: "Costos", route:"/costos", image: <WalletFill/>},
        { name: "Reporte", route:"/reporte", image: <BarChartFill/>}
    ];

    return (
        <ReporteContentStyled>
            <Sidebard list={option}/>
            <div>content Reporte</div>
        </ReporteContentStyled>
    );
}

export default Reporte;