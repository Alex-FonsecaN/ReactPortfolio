import './Contact.scss';
import { MainContext } from '../../MainContextProvider';
import { useState, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

function Contact() {
    const { publics } = useContext(MainContext);
    const { finishedIntroAnim } = publics;

    return (
        <>
            {finishedIntroAnim &&
                <>
                    <div id='contact-main'>
                        <div id='contact-content'>
                            <a href='https://www.linkedin.com/in/alexandre-fonseca-novaes-95722a171/' target='_blank' rel='noopener noreferrer'>
                                <i className='fa-brands fa-linkedin'></i>
                            </a>
                            <a href='https://github.com/Alex-FonsecaN' target='_blank' rel='noopener noreferrer'>
                                <i className='fa-brands fa-github'></i>
                            </a>
                            <RouterLink to='/tiktok'>
                                <i className='fa-brands fa-tiktok'></i>
                            </RouterLink>
                            <a href='mailto:fonsecaalexandre30@gmail.com'>
                                <i className='fa-solid fa-envelope'></i>
                            </a>
                        </div>
                        <span className='secondary-info'> &copy; Alexandre Fonseca. Todos os direitos reservados</span>
                        <ScrollLink className='footer-scroll' to='presentation-main' smooth={true} duration={500}>Retornar ao topo</ScrollLink> 
                    </div>
                </>
            }
        </>
    )
}

export default Contact;
