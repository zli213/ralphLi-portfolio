import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const aboutArray = ['a', 'b', 'o', 'u', 't', ' ', 'm', 'e'];
    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [])
    return (
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={aboutArray}
                        idx={15}
                    />
                </h1>
                <p>1111111111</p>
                <p>2222222222</p>
                <p>3333333333</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#DD0031' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#DD0031' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#DD0031' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#DD0031' />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About