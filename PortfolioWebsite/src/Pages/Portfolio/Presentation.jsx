import './Presentation.scss';
import { useEffect, useRef, useContext } from 'react';
import {gsap} from 'gsap';
import { MainContext } from '../../MainContextProvider';
import { Link } from 'react-scroll';



function Presentation() {

  const {publics} = useContext(MainContext);
  const {finishedIntroAnim} = publics;

    const h1Ref = useRef();
    const h6Ref = useRef();


   

    useEffect(() => {

      if (!finishedIntroAnim) {
        return; // Se não for verdadeiro, interrompe a execução do useEffect
    }

    [h1Ref, h6Ref].forEach((ref) => {
      const title = ref.current;

      gsap.set(title, {opacity: 0});

      gsap.to(title, { 
        opacity: 1, 
        duration: 7, 
        ease: 'power2.out'
      });
    });

        const maxDuration = 3; // Duração total da animação em segundos
    
        const scrambleText = (text) => {
          let result = [];
          let textLength = text.length;
          for (let i = 0; i < textLength; i++) {
            result.push(randomChar());
          }
          return result;
        };
    
        const randomChar = () => {
          const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&#$!%@";
          return chars.charAt(Math.floor(Math.random() * chars.length));
        };
    
        const titles = [
          { ref: h1Ref, text: "Alexandre Fonseca Novaes" },
        //   { ref: h2Ref, text: "Portfolio" },
          { ref: h6Ref, text: "Fullstack Developer / Game Developer" }
        ];
    
        titles.forEach(({ ref, text }) => {
          let scrambledText = scrambleText(text);
          let textLength = text.length;
          let charIndexes = [...Array(textLength).keys()];
    
          // Embaralhar índices
          charIndexes.sort(() => Math.random() - 0.5);
    
          ref.current.textContent = scrambledText.join('');
    
          charIndexes.forEach((index, i) => {
            setTimeout(() => {
              scrambledText[index] = text[index];
              ref.current.textContent = scrambledText.join('');
            }, (maxDuration / textLength) * i * 1000);
          });
        });
      }, [finishedIntroAnim]);

    return(
       <>
        <div id='presentation-main'>
          <div id='presentation-panel'>
            {finishedIntroAnim && 
            <>
              <h1 ref={h1Ref}></h1>
              <h6 ref={h6Ref}></h6>
              <Link to="fullstack-main" smooth={true} duration={350}><i className="fa-solid fa-chevron-down"></i></Link>
            </>
            }
          </div>
            
        </div>
       </>
    )
}

export default Presentation;