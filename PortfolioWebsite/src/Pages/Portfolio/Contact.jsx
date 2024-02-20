import './Contact.scss';
import { MainContext } from '../../MainContextProvider';
import { useState, useContext } from 'react';
import { Link } from 'react-scroll';





function Contact() {

    const {publics} = useContext(MainContext);
    const {finishedIntroAnim} = publics;

    return(
        <>
        {finishedIntroAnim && 
       <>
            <div id='contact-main'>
                <div id='contact-content'>
                    <div className='contents'>
                        <a href='https://www.linkedin.com/in/alexandre-fonseca-novaes-95722a171/' target='blank'><i className='fa-brands fa-linkedin'></i><span>LinkedIn</span> </a>
                        <a href='https://github.com/Alex-FonsecaN' target='blank'><i className='fa-brands fa-github'></i><span>Github</span> </a>
                    </div>
                    <div className='contents'>
                        <a href='https://www.tiktok.com/@xandinhofiltros?_t=8k0gg6dSoC6&_r=1' target='blank'><i className='fa-brands fa-tiktok'></i><span>Tiktok</span> </a>
                        <div><i className='fa-solid fa-envelope'></i><span>fonsecaalexandre30@gmail.com</span> </div>
                    </div>

                </div>
                    <Link id='footer-link' to='presentation-main' smooth={true} duration={500}>Retornar ao topo</Link>
            </div>
       </>
}
       </>
    )
}

export default Contact;