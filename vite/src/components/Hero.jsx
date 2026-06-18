import { useEffect, useState } from 'react';
import './Hero.css';
import SocailMediaIcons from './SocialMedioIcons';
const Hero = () => {
    const [bgFixedClass, setBgFixedClass] = useState('');

    useEffect(() => {
        //para que no tire error los de apple
        const esIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (!esIOS) {
            setBgFixedClass('hero-bg-fixed');
        }
    }, []);

    ;
    return (
        <>
            <div className={`hero-container ${bgFixedClass}`}>
                <div className="hero-content">
                    <div className="hero-animate">
                        <h1 className="hero-title">Florencia Cardinali</h1>
                        <p className="hero-subtitle">Front-End & Game Developer</p>
                    </div>
                    <div className="hero-social-list">
                        <SocailMediaIcons ruta="/github.png" alt="GitHub" link="https://github.com/FlorCardinali" />
                        <SocailMediaIcons ruta="/linkedin.png" alt="LinkedIn" link="https://www.linkedin.com/in/florencia-cardinali/" />
                        <SocailMediaIcons ruta="/instagram.png" alt="Instagram" link="https://www.instagram.com/flor_cardinalii/" />
                    </div>
                </div>

            </div>
            <div id="about-section">
            </div>
        </>
    );
}
export default Hero;