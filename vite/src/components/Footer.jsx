import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-main">
                <div className="footer-intro">
                    <span className="footer-eyebrow">LET'S BUILD SOMETHING</span>
                    <h2 className="footer-name">Florencia Cardinali<span>.</span></h2>
                    <p className="footer-bio">
                        Front-end developer and game creator in Bahía Blanca, Argentina.
                        I like to turn ideas into clear websites and fun games.
                    </p>
                    <a
                        className="footer-cta"
                        href="https://www.linkedin.com/in/florencia-cardinali/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Let’s connect <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <div className="footer-focus">
                    <h3 className="footer-column-title">What I do</h3>
                    <span>Front-end development</span>
                    <span>Game development</span>
                    <span>Stories in games</span>
                </div>

                <nav className="footer-navigation" aria-label="Footer navigation">
                    <h3 className="footer-column-title">Explore</h3>
                    <a href="#about-section">About me</a>
                    <a href="#experience-section">Experience</a>
                    <a href="#proyects-section">Projects</a>
                    <a href="#education-section">Education</a>
                </nav>

                <div className="footer-socials">
                    <h3 className="footer-column-title">Find me</h3>
                    <a href="https://github.com/FlorCardinali" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                    <a href="https://www.linkedin.com/in/florencia-cardinali/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                    <a href="https://snowfox-studio.itch.io/" target="_blank" rel="noreferrer">itch.io <span aria-hidden="true">↗</span></a>
                    <a href="https://www.instagram.com/flor_cardinalii/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© {currentYear} Florencia Paula Cardinali</span>
                <span>Made with care <span className="footer-heart" aria-label="love">♥</span></span>
            </div>
        </footer>
    );
};

export default Footer;
