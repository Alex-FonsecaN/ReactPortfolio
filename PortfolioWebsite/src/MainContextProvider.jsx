import { createContext, useState} from 'react';


export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {

    const [finishedIntroAnim, setFinishedIntroAnim] = useState(false);

    const publics = {
        finishedIntroAnim,
        setFinishedIntroAnim
    }


    return (
        <MainContext.Provider value={{ publics}}>
            {children}
        </MainContext.Provider>
    );
};