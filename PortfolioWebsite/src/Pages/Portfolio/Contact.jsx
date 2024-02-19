import './Contact.scss';
import { MainContext } from '../../MainContextProvider';
import { useState, useContext } from 'react';
import { Link } from 'react-scroll';





function Contact() {

    return(
       <>
            <div id='contact-main'>
                <div id='contact-content'>
                    <div className='contents'>
                        <button><i className='fa-brands fa-linkedin'></i><span>LinkedIn</span> </button>
                        <button><i className='fa-brands fa-github'></i><span>Github</span> </button>
                    </div>
                    <div className='contents'>
                        <button><i className='fa-brands fa-tiktok'></i><span>Tiktok</span> </button>
                        <div><i className='fa-solid fa-envelope'></i><span>fonsecaalexandre30@gmail.com</span> </div>
                    </div>

                </div>
                    <Link to='presentation-main' smooth={true} duration={500}>Retornar ao topo</Link>
            </div>
       </>
    )
}

export default Contact;