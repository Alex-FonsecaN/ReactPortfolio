import './Fullstack.scss';
import { MainContext } from '../../MainContextProvider';
import { useState, useContext } from 'react';
import { Link } from 'react-scroll';



function Fullstack() {

    const {publics} = useContext(MainContext);
    const {finishedIntroAnim} = publics;

    const [languages, setLanguages] = useState(['React JS', 'Node.js', 'ASP.NET', 'SASS']);
    const [arrowIndex, setArrowIndex] = useState(null);

    const [languagesInfo, setLanguagesInfo] = useState(['Ao longo do desenvolvimento de diversos projetos, descobri a eficiência do React principalmente em construir páginas dinamicamente a partir de dados retribuidos do BackEnd, e possibilitando organizar as páginas, unindo diferentes arquivos de forma simples',
'Muito complementar ao React, realiza as operações BackEnd e teve destaque por ser fácil de entender.',
'Na minha experiência, um framework robusto e eficiente. Se destaca por oferecer recursos de segurança de forma padrão e consegue ter uma ótima estruturação ao utilizar o MVC',
'Uma excelente adição ao desenvolvimento, permite criar arquivos semelhantes ao CSS, porém mais organizados e limpos. Permite conectar diversos códigos SASS entre si'])
    const [languageIndex, setLanguageIndex] = useState(0);
    const [typingText, setTypingText] = useState('Selecione uma linguagem acima');

    const writeLanguageInfo = (index) => {
        setLanguageIndex(index);
        let fullText = languagesInfo[index];
        let currentText = '';
        let i = 0;

        const typingAnimation = () => {
            if (i < fullText.length) {
            currentText = fullText.substring(0, i + 1);
            setTypingText(currentText);
            i++;
            setTimeout(typingAnimation, 25); 
            }
        };

         typingAnimation();

    }

    return(
       <>
       {finishedIntroAnim && 
       <>
            <div id='fullstack-main'>
                <div id='languages-grid'>
                {languages.map((language, index) => (
                    <Link to="languages-details" smooth={true} duration={1000} key={index} className='language-item' onClick={() => writeLanguageInfo(index)} onMouseEnter={() => setArrowIndex(index)} onMouseLeave={() => setArrowIndex(null)}>
                    <i className="fa-solid fa-arrow-right" style={{ opacity: arrowIndex === index ? 1 : 0 }}></i>
                    <span>{language}</span>
                </Link>
                ))}
                </div>
            </div>

            <div id='languages-details'>
                <span className="blinking-underline">{typingText}</span>
            </div>
        </>
       }
       
       </>
    )
}

export default Fullstack;