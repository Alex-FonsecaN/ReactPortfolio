import {  useRef, useState, useContext } from 'react';
import { gsap } from 'gsap';
import './Intro.scss';
import { MainContext } from '../MainContextProvider';

const Intro = () => {

  const {publics} = useContext(MainContext);
  const {setFinishedIntroAnim} = publics;

    const wave1Ref = useRef(null);
    const wave2Ref = useRef(null);
    const wave3Ref = useRef(null);
    const btnUpperRef = useRef(null);
    const btnMidRef = useRef(null);
    const btnInfRef = useRef(null);
    const spanRef = useRef(null);
    const mainDivRef = useRef(null);

    const [animationPlaying, setAnimationPlaying] = useState(false);

    const handleClick = (event) => {

        if(animationPlaying) return;

        setAnimationPlaying(true);
        event.stopPropagation();
    
        //Anima as divs de ondas
        [wave1Ref, wave2Ref, wave3Ref].forEach((ref, index) => {
          const wave = ref.current;
          gsap.set(wave, { scale: 0, opacity: 0.6 });
    
          // Inicia cada onda com um leve atraso entre elas
          gsap.to(wave, { scale: 60, opacity: 0, duration: 5, delay: 0.3 * index, ease: 'power1.out' });
        });
    
        //Anima os botões para crescerem e sumirem
        [btnUpperRef, btnMidRef, btnInfRef].forEach((ref) => {
          const btn = ref.current;
    
          gsap.to(btn, { 
            scale: 2,
            "--border-color": "rgba(0, 0, 0, 0)", // Anima a variável CSS
            duration: 1.5, 
            ease: 'power1.out'
          });
        });
    
    
        //Anima a transparencia do botão de iniciar
        const span = spanRef.current;
    
        

        gsap.to(span, {
          scale:1.1,
          opacity:0,
          duration:1,
          ease:"power1.out"
        })
    
        //Anima a div principal para sumir
    
        const mainDiv = mainDivRef.current
    
        gsap.to(mainDiv, {
          opacity:0,
          duration: 4,
          ease: "power1.out"
        })

        setTimeout(() => {
          setFinishedIntroAnim(true);
        }, 500);
        setTimeout(() => {
          removeIntroContent();
        }, 3500)

    };

      const removeIntroContent = () => {
        const mainDiv = mainDivRef.current;
        if (mainDiv && mainDiv.parentNode) {
            mainDiv.parentNode.removeChild(mainDiv);
        }
    };

      

    return(
        <div className="button-container" ref={mainDivRef}>
        <div className='btn-upper' onClick={handleClick} ref={btnUpperRef}>
          <div className='btn-mid' ref={btnMidRef}>
            <div className='btn-inf' ref={btnInfRef}>
              <div className="wave" ref={wave1Ref}></div>
              <div className="wave" ref={wave2Ref}></div>
              <div className="wave" ref={wave3Ref}></div>
            </div>
          </div>
        </div>
        <span onClick={handleClick} ref={spanRef}>Iniciar</span>
    </div>
    )
}

export default Intro;