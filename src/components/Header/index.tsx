import Personagem from "../../assets/Personwithoutbackgorund.png";
import { SButton } from "../../styles/Button";
import {
    SContainer,
    SHeader,
    SSectionDescription,
    SSectionRigth,
} from "./styled";
export const Header = () => {
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

                        <SButton>Cadastre-se</SButton>
                        <p>Ja possui cadastro?</p>
                        <SButton>Login</SButton>
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
