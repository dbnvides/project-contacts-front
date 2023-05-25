import Personagem from "../../assets/Personwithoutbackgorund.png";
import { SButton, SButtonEntry, SButtonRegister } from "../../styles/Button";
import {
    SContainer,
    SFormEntry,
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

                        <SButtonRegister>Cadastre-se</SButtonRegister>
                        <p>Possui cadastro?</p>
                        <SFormEntry>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Digite seu email"
                            />
                            <SButtonEntry type="submit">Entrar</SButtonEntry>
                        </SFormEntry>
                    </SSectionDescription>
                    <SSectionRigth>
                        <div>
                            <img
                                src={Personagem}
                                alt="personagem segurando uma agenda"
                            />
                        </div>
                        <span>Já possui cadastro?</span>
                        <SFormEntry>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Digite seu email"
                            />
                            <button type="submit">Entrar</button>
                        </SFormEntry>
                    </SSectionRigth>
                </SContainer>
            </SHeader>
        </>
    );
};
