import Title from './Title';
import RevealOnScroll from './RevealOnScroll';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-section">

            <RevealOnScroll>
                <Title
                    title="About me"
                    content=""
                    colorFrom="gold"
                    colorTo="gold-light"
                />
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="about-container">

                    <article className="about-content">
                        <span className="about-eyebrow">DEVELOPER · PROGRAMMER · GAME CREATOR</span>
                        <p id="about-text">

                            Hi, I’m <span className="about-highlight">Florencia Cardinali</span>. I have a degree in Programming from the Universidad Tecnológica Nacional (UTN).
                            <br /><br />
                            I am a <span className="about-highlight">perfectionist and adaptable</span> developer. I like to work in teams where we can focus on <span className="about-highlight">personal and professional growth</span>.
                            <br /><br />
                            I care a lot about the quality of my work. I focus on <span className="about-highlight">clean and readable code</span>, and I always try to leave the code better than I found it.
                            <br /><br />
                            My experience includes <span className="about-highlight">game development</span> (Unity and Godot) and <span className="about-highlight">full-stack web development</span>.
                            I have a 76% visual impairment, but this is <span className="about-highlight">not a limitation</span> for me. In fact, it motivates me to learn and grow in my career every day.

                        </p>
                    </article>
                    <div className="about-image-frame">
                        <img className="about-image" src="/yo.jpeg" alt="Florencia Cardinali" />
                    </div>
                </div>
            </RevealOnScroll>
        </section>

    );
}

export default AboutMe;