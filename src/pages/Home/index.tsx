import { useState } from "react";
import { ModalLogin } from "../../components/ModalLogin";
import { NavBar } from "../../components/Navbar";
import { SButton } from "../../styles/Button";
import {
    SHeader,
    SContainer,
    SSectionDescription,
    SSectionRigth,
} from "./styled";
import Personagem from "../../assets/Personwithoutbackgorund.png";
import { ModalRegister } from "../../components/ModalRegister";

export const Home = () => {
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
            <NavBar />
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
            {isOpenLoginModal && <ModalLogin toggleModel={toggleModal} />}
            {isOpenRegisterModal && <ModalRegister toggleModel={toggleModal} />}
        </>
    );
};
