import React, { useState, useEffect } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetter from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => {
            clearTimeout(timerId);
        };
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    {/* Hi, */}
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    {/* I'm */}
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    {/* obodan */}
                    <AnimatedLetter letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetter strArray={jobArray} letterClass={letterClass} idx={22} />
                    <br />
                </h1>
                <h2>Frontend Developer / Javascript Expert / YouTubers</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home