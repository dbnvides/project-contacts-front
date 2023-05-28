import logoOnly from "../../assets/logoOnly.png";
import { SContainer, SLogo, SNavBar } from "./styled";

export const NavBar = () => {
    return (
        <>
            <SNavBar>
                <SContainer>
                    <SLogo>
                        <img src={logoOnly} alt="logo" />
                    </SLogo>
                    <span>
                        <b>C</b>ontact<b>C</b>enter
                    </span>
                </SContainer>
            </SNavBar>
        </>
    );
};
