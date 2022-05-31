import { Instagram } from "react-bootstrap-icons";
import { FacebbokContentStyled, FooterContentStyled, SocialContentStyled } from "./Styled.CustomFooter";


const CustomHeader = () => {


    return (
        <FooterContentStyled>
               <SocialContentStyled>
                   <FacebbokContentStyled/>
                   <Instagram/>
               </SocialContentStyled>
              <div>LIMA SPORT CENTER © 2022</div> 
           </FooterContentStyled>
    );
}

export default CustomHeader;