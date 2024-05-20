import './Fullstack.scss';
import { MainContext } from '../../MainContextProvider';
import { useState,useContext } from 'react';
import TypingEffect from '../../Components/TypingEffect.jsx';




function Fullstack() {

    const {publics, longVariables} = useContext(MainContext);
    const {finishedIntroAnim} = publics;
    const {texts} = longVariables;

    const [currentText,setCurrentText] = useState(texts[0]);

    const changeText = (index) => {
        setCurrentText(texts[index]);
    }
    return(
       <>
        {finishedIntroAnim && 
        <>
                <div id='fullstack-main'>
                    <div id='fullstack-left'>
                        <div id='fullstack-l-s1'>
                            <div className='icon-parent' onClick={() => changeText(0)}>
                                <i className="fa-solid fa-user-tie"></i>
                            </div>
                        </div>
                        <div id='fullstack-l-s2'>
                            <div className='icon-parent' onClick={() => changeText(1)}>
                                <i className="fa-solid fa-laptop-code"></i>
                            </div>
                            <div className='icon-parent' onClick={() => changeText(2)}>
                                <i className="fa-solid fa-gamepad"></i>
                            </div>
                            <div className='icon-parent' onClick={() => changeText(3)}>
                                <i className="fa-regular fa-lightbulb"></i>
                            </div>
                        </div>
                    </div>
                    <div id='fullstack-right'>
                        <TypingEffect text={currentText} />
                    </div>
                </div>

               
            </>
        }
       
       </>
    )
}

export default Fullstack;