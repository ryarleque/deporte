import Carousel from "react-bootstrap/esm/Carousel";
import { useNavigate } from "react-router-dom";
import CustomHeader from "../CustomHeader";
import { ButtonHeaderStyled,Button2HeaderStyled, PlanCardInfotStyled, CarouselStyled, ContentCarouselStyled, HeadertStyled, HomeContentStyled, ItemHeaderStyled, ItemLastHeaderStyled, LeftHeadertStyled, LogoHeadertStyled, PromotionColorStyled, PromotionContentColorStyled, RighttHeadertStyled, TitleCarouselStyled, TitleHeaderStyled, ImageCarouselStyled, FacebbokContentStyled, FooterContentStyled, SocialContentStyled, WhatsappContentStyled, ContentWhatsappStyled, ContentStyled, TitleStyled, BeneficiosCardContainerStyled, BeneficiosCardStyled, BeneficiosCardTittleStyled, BeneficiosContentStyled, BeneficiosStyled, BeneficiosTittleStyled, SociosContentInnerStyled, SociosContentStyled, SociosListStyled, SociosTitleStyled, CardHomeContentPlantStyled, CardHomePlantStyled, PromoTittleStyled } from "./Styled.Home";
import { ButtonStyled } from "../Login/Styled.button";
import { CardPlantStyled, PlanCardStyled, PlanCardItemStyled, PlanCardListStyled, PlanCardPricetStyled } from "../Register/Styled.button";
import { useState } from "react";

const Home = () => {
    const navigate = useNavigate();
    const planList = [
        {id:0, name: 'PROMO PENSÁ', suscription: '12 meses', free: [{value: 'Uniforme'},{value: '1 MES GRATIS'}], price:'219', decimalPrice: '90' },
        {id:1, name: 'PROMO LAPADULA', suscription: '5 meses', free: [{value: 'Uniforme'}], price:'249', decimalPrice: '90' },
        {id:2, name: 'PROMO CUEVITA', suscription: '3 meses', free: [{value: 'Uniforme'}], price:'269', decimalPrice: '90' },
      ];

      const [selectedPlan] = useState('PROMO PENSÁ')

    return (
       <HomeContentStyled>
            <CustomHeader/>
            <ContentCarouselStyled>
                <CarouselStyled indicators={false} interval={900} controls={false}>
                    <Carousel.Item>
                        <ImageCarouselStyled
                        className="d-block w-100"
                        src="https://media.gettyimages.com/photos/footballer-keeping-ball-up-picture-id102069425?s=612x612"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ImageCarouselStyled
                        className="d-block w-100"
                        src="https://media.gettyimages.com/photos/soccer-player-dressed-in-black-running-with-ball-at-night-picture-id1190197787?s=612x612"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </CarouselStyled>

                <TitleCarouselStyled>
                    <ButtonHeaderStyled onClick={()=> navigate('/registrar')}>ÚNETE</ButtonHeaderStyled>
                    <PromotionContentColorStyled>
                        <PromotionColorStyled>#</PromotionColorStyled>
                        <span>LIMA</span>
                        <PromotionColorStyled>SPORT</PromotionColorStyled>
                        <span>CENTER</span>
                    </PromotionContentColorStyled>
                </TitleCarouselStyled>
            </ContentCarouselStyled>

            <ContentStyled>
                <TitleStyled>Centro deportivo tecnólogico para adultos </TitleStyled>
            </ContentStyled>

            <BeneficiosStyled>
                <BeneficiosContentStyled>
                    <BeneficiosTittleStyled>BENEFICIOS</BeneficiosTittleStyled>
                    <BeneficiosCardContainerStyled>
                        <BeneficiosCardStyled>
                            <BeneficiosCardTittleStyled><div>Acceso a</div><div>la App</div></BeneficiosCardTittleStyled>
                        </BeneficiosCardStyled>
                        <BeneficiosCardStyled>
                            <BeneficiosCardTittleStyled><div>Registro de</div><div>Progresos</div></BeneficiosCardTittleStyled>
                        </BeneficiosCardStyled>
                    </BeneficiosCardContainerStyled>
                    <BeneficiosCardContainerStyled>
                        <BeneficiosCardStyled>
                            <BeneficiosCardTittleStyled><div>Tests</div><div>Mensuales</div></BeneficiosCardTittleStyled>
                        </BeneficiosCardStyled>
                        <BeneficiosCardStyled>
                            <BeneficiosCardTittleStyled><div>Entrenamientos</div><div>Funcionales</div></BeneficiosCardTittleStyled>
                        </BeneficiosCardStyled>
                    </BeneficiosCardContainerStyled>
                    <BeneficiosCardContainerStyled>
                        <BeneficiosCardStyled>
                            <BeneficiosCardTittleStyled><div>Reportes</div><div>Detallados</div></BeneficiosCardTittleStyled>
                        </BeneficiosCardStyled>
                        <BeneficiosCardStyled>
                            <BeneficiosCardTittleStyled><div>Plan</div><div>Nutricional</div></BeneficiosCardTittleStyled>
                        </BeneficiosCardStyled>
                    </BeneficiosCardContainerStyled>
                </BeneficiosContentStyled>
            </BeneficiosStyled>

            <SociosContentStyled>
                <SociosContentInnerStyled>
                    <SociosTitleStyled>Socios</SociosTitleStyled>
                    <SociosListStyled>
                        <div>JOGO</div>
                        <div>CARDELAGO ARQUITECTOS</div>
                        <div>TORNEO</div>
                        <div>WePay4U</div>
                    </SociosListStyled>
                </SociosContentInnerStyled>
            </SociosContentStyled>

            <CardHomeContentPlantStyled>
                <CardHomePlantStyled>
                    <PromoTittleStyled>Promociones</PromoTittleStyled>
                    <PlanCardInfotStyled>Recuerda que <span className="type1">SOLO PAGARÁS EL MONTO DE LA PROMO INDICADO</span> al inicio de cada mes, <span className="type2">NO PAGARÁS TODO DE UNA!!</span> </PlanCardInfotStyled>
                    <br/>
                    { planList.map((item: any) => (
                    <PlanCardStyled className={item.name === selectedPlan ? 'selected' : ''}>
                        <PlanCardItemStyled >{item.name}</PlanCardItemStyled>
                        <PlanCardListStyled>
                        <div className="item">Suscripción</div>
                        <div>{item.suscription}</div>
                        </PlanCardListStyled>
                        <PlanCardListStyled>
                        <div className="item">Incluye</div>
                        {item.free.map((detail: any) => (
                            <div>{detail.value}</div>
                        ))}
                        </PlanCardListStyled>
                        <PlanCardPricetStyled>
                        <div>S/</div>
                        <div className="principal">{item.price},</div>
                        <div>{item.decimalPrice}</div>
                        </PlanCardPricetStyled>
                    </PlanCardStyled>
                    ))}
                </CardHomePlantStyled>
            </CardHomeContentPlantStyled>

           <ContentWhatsappStyled>
                <a href="https://api.whatsapp.com/send?phone=51983475754&lang=es&text=informacion"> <WhatsappContentStyled/></a>
            </ContentWhatsappStyled>

       </HomeContentStyled>
    );
}

export default Home;