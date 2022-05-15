import { Instagram } from "react-bootstrap-icons";
import Carousel from "react-bootstrap/esm/Carousel";
import { ButtonHeaderStyled,Button2HeaderStyled, CarouselStyled, ContentCarouselStyled, HeadertStyled, HomeContentStyled, ItemHeaderStyled, ItemLastHeaderStyled, LeftHeadertStyled, LogoHeadertStyled, PromotionColorStyled, PromotionContentColorStyled, RighttHeadertStyled, TitleCarouselStyled, TitleHeaderStyled, ImageCarouselStyled, FacebbokContentStyled, FooterContentStyled, SocialContentStyled, WhatsappContentStyled, ContentWhatsappStyled, ContentStyled, TitleStyled } from "./Styled.Home";

const Home = () => {


    return (
       <HomeContentStyled>
           <HeadertStyled>
               <LeftHeadertStyled>
                    <LogoHeadertStyled src={require("../../Assets/logo.png")} alt="logo"/>
                    <TitleHeaderStyled>SPORT LIMA CENTER</TitleHeaderStyled>
               </LeftHeadertStyled>
               <RighttHeadertStyled>
                   <ItemHeaderStyled>HOME</ItemHeaderStyled>
                   <ItemHeaderStyled>SEDES</ItemHeaderStyled>
                   <ItemHeaderStyled>TORNEOS</ItemHeaderStyled>
                   <ItemLastHeaderStyled>CONTACTO</ItemLastHeaderStyled>
                   <ButtonHeaderStyled>LOGIN</ButtonHeaderStyled>
                   <Button2HeaderStyled>REGISTRATE</Button2HeaderStyled>
               </RighttHeadertStyled>
           </HeadertStyled>

            <ContentCarouselStyled>
                <CarouselStyled indicators={false} interval={900} controls={false}>
                    <Carousel.Item>
                        <ImageCarouselStyled
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/c8/ff/8f/c8ff8f7ef3667ecea4c5628e6487950f.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ImageCarouselStyled
                        className="d-block w-100"
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e774d1ed-4d27-4f4f-8873-a5cc4fcb2408/dch12o1-06b0574e-127d-4101-b6b7-103012e34a8d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3NzRkMWVkLTRkMjctNGY0Zi04ODczLWE1Y2M0ZmNiMjQwOFwvZGNoMTJvMS0wNmIwNTc0ZS0xMjdkLTQxMDEtYjZiNy0xMDMwMTJlMzRhOGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RYUEAm5WfWC-Y8dtf9WYFwyCzAbTTQobEOUXDX5IZpE"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </CarouselStyled>

                <TitleCarouselStyled>
                    <ButtonHeaderStyled>UNETE</ButtonHeaderStyled>
                    <PromotionContentColorStyled>
                        <PromotionColorStyled>#</PromotionColorStyled>
                        <span>SPORT</span>
                        <PromotionColorStyled>LIMA</PromotionColorStyled>
                        <span>CENTER</span>
                    </PromotionContentColorStyled>
                </TitleCarouselStyled>
            </ContentCarouselStyled>

            <ContentStyled>
                <TitleStyled>Lorem Ipsum is simply dummy text</TitleStyled>

                <div>Lorem Ipsum is simply dummy text Ipsum is simply dummy text Ipsum is simply dummy text Ipsum is simply dummy text Ipsum is simply dummy text Ipsum is simply dummy text Ipsum is simply dummy text Ipsum is simply dummy text Ipsum is simply dummy text Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            </ContentStyled>


           <ContentWhatsappStyled>
                <a href="https://api.whatsapp.com/send?phone=51983475754&lang=es&text=informacion"> <WhatsappContentStyled/></a>
            </ContentWhatsappStyled>

           <FooterContentStyled>
               <SocialContentStyled>
                   <FacebbokContentStyled/>
                   <Instagram/>
               </SocialContentStyled>
              <div>SPORT LIMA CENTER © 2022</div> 
           </FooterContentStyled>
       </HomeContentStyled>
    );
}

export default Home;