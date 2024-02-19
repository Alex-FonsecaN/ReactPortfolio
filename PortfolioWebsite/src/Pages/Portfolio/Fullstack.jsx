import './Fullstack.scss';
import { MainContext } from '../../MainContextProvider';
import { useState, useContext } from 'react';
import { Link } from 'react-scroll';
import ReactPrint from '../../assets/ReactPrint.png';
import NodePrint from '../../assets/NodePrint.png';
import SassPrint from '../../assets/SassPrint.png';
import ASPNETPrint from '../../assets/ASPNETPrint.png';




function Fullstack() {

    const {publics} = useContext(MainContext);
    const {finishedIntroAnim} = publics;

    const [languages, setLanguages] = useState(['React JS', 'Node.js', 'ASP.NET', 'SASS']);
    const [arrowIndex, setArrowIndex] = useState(null);

    const [languagesInfo, setLanguagesInfo] = useState(['React é a base principal deste site, é o que utilizo para montar e configurar o html e javascript Front-end das páginas. Muito útil desde sistemas simples, até sistemas mais complexos. Ao lado um exemplo retirado do próprio código fonte desta página',
'Utilizo o Node.js de forma muito complementar ao React, serve todas as funções Back-end através de rotas ou websockets. Ao lado, um exemplo retirado de uma rota de registro de conta',
'ASP.NET na minha experiência é um framework robusto e eficiente. Se destaca por oferecer recursos de segurança de forma padrão e consegue ter uma ótima estruturação ao utilizar o MVC. Ao lado um exemplo retirado de um sistema protótipo que controla células em uma planilha Google Sheets',
'O SASS é uma excelente adição ao desenvolvimento deste website, permite criar arquivos semelhantes ao CSS, porém mais organizados e limpos. Permite conectar diversos códigos SASS entre si. Ao lado um exemplo retirado do próprio código fonte desta página'])
    const [languageIndex, setLanguageIndex] = useState(0);
    const [typingText, setTypingText] = useState('Selecione uma opção acima');
    const [selectedImage, setSelectedImage] = useState(null);
    const languageImages = [ReactPrint, NodePrint, ASPNETPrint, SassPrint];

    const writeLanguageInfo = (index) => {
        setSelectedImage(languageImages[index]);
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
                    <Link to="languages-details" smooth={true} duration={350} key={index} className='language-item' onClick={() => writeLanguageInfo(index)} onMouseEnter={() => setArrowIndex(index)} onMouseLeave={() => setArrowIndex(null)}>
                    <i className="fa-solid fa-arrow-right" style={{ opacity: arrowIndex === index ? 1 : 0 }}></i>
                    <span>{language}</span>
                </Link>
                ))}
                </div>
            </div>

            <div id='languages-details'>
                <span className="blinking-underline">{typingText}</span>
                <div id='language-projects'>
                   {selectedImage && <h3>Exemplo</h3>} 
                    <div>
                    <img src={selectedImage} alt='Sem imagem' style={{ opacity: selectedImage ? 1 : 0 }} />
                    </div>
                </div>
            </div>
        </>
       }
       
       </>
    )
}

export default Fullstack;