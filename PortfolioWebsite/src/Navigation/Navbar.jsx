import './Navbar.scss';
import { MainContext } from '../MainContextProvider';
import {useContext } from 'react';
import { Link } from 'react-router-dom';
function Navbar () {

    const {publics} = useContext(MainContext);
    const {finishedIntroAnim} = publics;

    return (
        <>
            {finishedIntroAnim && 
                <nav id="navbar">
                    <Link to='/tiktok'>Tiktok</Link>
                    <Link to='/game'>Games</Link>
                </nav>
            }

        </>
    )
}

export default Navbar;