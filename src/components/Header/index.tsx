import { useState } from "react";
import Personagem from "../../assets/Personwithoutbackgorund.png";
import { SButton } from "../../styles/Button";
import {
    SContainer,
    SHeader,
    SSectionDescription,
    SSectionRigth,
} from "./styled";
export const Header = () => {
    const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

    const toggleModal = (type: string) => {
        if (type == "login") {
            setIsOpenLoginModal(!isOpenLoginModal);
        }
        if (type == "register") {
            setIsOpenRegisterModal(!isOpenRegisterModal);
        }
    };

    return (
        <>
            <SHeader>
                <SContainer>
                    <SSectionDescription>
                        <h2>Bem vindo(a) a ContactCenter!</h2>
                        <p>
                            Oferecemos uma solução prática e segura para
                            organizar e acessar suas informações de contato de
                            forma conveniente. Mantenha suas informações
                            atualizadas e acessíveis em um mundo conectado.
                        </p>

                        <SButton
                            type="button"
                            onClick={() => toggleModal("register")}
                        >
                            Cadastre-se
                        </SButton>
                        <p>Ja possui cadastro?</p>
                        <SButton
                            type="button"
                            onClick={() => toggleModal("login")}
                        >
                            Login
                        </SButton>
                    </SSectionDescription>
                    <SSectionRigth>
                        <div>
                            <img
                                src={Personagem}
                                alt="personagem segurando uma agenda"
                            />
                        </div>
                    </SSectionRigth>
                </SContainer>
            </SHeader>
        </>
    );
};
