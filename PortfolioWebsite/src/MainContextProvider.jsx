import { createContext, useState} from 'react';


export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {

    const [finishedIntroAnim, setFinishedIntroAnim] = useState(false);
    const texts = [
        'Um profissional organizado, dedicado e respeitoso. Abraço as mudanças sempre que necessárias e os desafios me mantém motivados. Possuo habilidades em algumas áreas da programação, sendo a principal delas a web, seja BackEnd ou FrontEnd.',
        'Estudo o desenvolvimento web desde 2016, onde adquiri muita familiaridade com HTML e CSS principalmente, ao longo dos anos, comecei a ter contato com outras tecnologias as quais hoje agregam muito nos meus projetos, sendo elas: ReactJs, NestJs, NodeJs, SASS e Tailwind.',
        'Também sou um desenvolvedor de jogos! Já participei em projetos publicados, como "Dandara: Trials of Fear" e "Nonogram Logic Pic: Pictogram". Além de diversos outros, incluindo projetos de faculdade e alguns jogos pequenos em WebGL por demanda.',
        'Gosto de me aventurar em algumas outras áreas, uma delas, sendo a criação de filtros para TikTok. Já criei e publiquei alguns filtros praticando minha criatividade e tendo isso como um hobby pessoal.'
    ];

    const publics = {
        finishedIntroAnim,
        setFinishedIntroAnim
    }
    const longVariables = {
        texts
    }


    return (
        <MainContext.Provider value={{ publics, longVariables}}>
            {children}
        </MainContext.Provider>
    );
};