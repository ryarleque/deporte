import React from "react";
import { useNavigate } from "react-router-dom";
import { ContentListStyled, IconStyled } from "./Styled.Sidebard";

function Sidebard ({
    list = []
}: any) {
    const navigate = useNavigate();
    return(
        <ContentListStyled>
            {list.map((item: any) => (
                <IconStyled key={item.name} onClick={() => navigate(item.route)}>{item.image}</IconStyled>
            ))}
        </ContentListStyled>
    );
}

export default Sidebard