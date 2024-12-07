import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const [finishedIntroAnim, setFinishedIntroAnim] = useState(false);
    const [showIntroDiv, setShowIntroDiv] = useState(true);
    const location = useLocation();

    useEffect(() => {
 
        setFinishedIntroAnim(false);
        setShowIntroDiv(true);
    }, [location.pathname]);

    const texts = [
        "Sou um profissional organizado, dedicado e respeitoso. Abraço as mudanças sempre que necessárias, e os desafios me mantêm motivado. Tenho habilidades em várias áreas da programação, com ênfase em desenvolvimento web, tanto no BackEnd quanto no FrontEnd.",
        "Estudo desenvolvimento web desde 2016, período em que adquiri grande familiaridade com HTML e CSS. Com o passar dos anos, expandi meu conhecimento para outras tecnologias que hoje enriquecem meus projetos, incluindo ReactJs, NestJs, NodeJs, SASS e Tailwind.",
        "Além de desenvolver para a web, também sou um desenvolvedor de jogos! Participei de projetos publicados, como 'Dandara: Trials of Fear' e 'Nonogram Logic Pic: Pictogram', além de diversos outros, incluindo projetos acadêmicos e pequenos jogos em WebGL sob demanda.",
        "Gosto de explorar outras áreas, uma delas sendo a criação de automatizações em Python e integrações com Inteligência Artificial. Já criei projetos muito interessantes e úteis profissionalmente."
    ];

    const publics = {
        finishedIntroAnim,
        setFinishedIntroAnim,
        showIntroDiv,
        setShowIntroDiv
    }
    const longVariables = {
        texts
    }

    return (
        <MainContext.Provider value={{ publics, longVariables }}>
            {children}
        </MainContext.Provider>
    );
};
