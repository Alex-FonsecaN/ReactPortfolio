import './Fullstack.scss';
import { MainContext } from '../../MainContextProvider';
import { useState,useContext } from 'react';
import TypingEffect from '../../Components/TypingEffect.jsx';




function Fullstack() {

    const {publics, longVariables} = useContext(MainContext);
    const {finishedIntroAnim} = publics;
    const {texts} = longVariables;

    const [currentText,setCurrentText] = useState(texts[0]);
    const [selectedIconIndex, setSelectedIconIndex] = useState(0);

    const changeText = (index) => {
        setCurrentText(texts[index]);
        setSelectedIconIndex(index);
    }
    return(
       <>
        {finishedIntroAnim && 
        <>
                <div id='fullstack-main'>
                    <div id='fullstack-left'>
                        <div id='fullstack-l-s1'>
                            <div className='icon-parent' onClick={() => changeText(0)}>
                                <i className={`fa-solid fa-user-tie ${selectedIconIndex === 0 ? 'selected' : ''}`}></i>
                            </div>
                        </div>
                        <div id='fullstack-l-s2'>
                            <div className='icon-parent' onClick={() => changeText(1)}>
                                <i className={`fa-solid fa-laptop-code ${selectedIconIndex === 1 ? 'selected' : ''}`}></i>
                            </div>
                            <div className='icon-parent' onClick={() => changeText(2)}>
                                <i className={`fa-solid fa-gamepad ${selectedIconIndex === 2 ? 'selected' : ''}`}></i>
                            </div>
                            <div className='icon-parent' onClick={() => changeText(3)}>
                                <i className={`fa-regular fa-lightbulb ${selectedIconIndex === 3 ? 'selected' : ''}`}></i>
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