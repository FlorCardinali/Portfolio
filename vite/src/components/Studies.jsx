import Title from "./Title";
import RevealOnScroll from "./RevealOnScroll";
import './Studies.css';

const Studies = () => {
    const studiesList = [
        {
            title: "University Technical Degree in Game Design and Programming",
            subtitle: "Universidad Provincial del Sudoeste",
            contenido: "This program covers the complete game development cycle, including programming, 2D and 3D art, game engines, and narrative design. It focuses on interdisciplinary teamwork to build mobile, multiplayer, and interactive games.",
            link: "",
            img: "/upso.jpeg"
        },
        {
            title: "3D Art for Video Games",
            subtitle: "Bahía HUB",
            contenido: "3D modeling using different styles. Voxel design and complex figure creation using Blender.",
            link: "https://drive.google.com/file/d/11MXbF0I1kOLUNDVUFP1yE8-3JzblJ1qW/view",
            img: "/bahiahub.jpg"
        },
        {
            title: "University Technical Degree in Programming",
            subtitle: "Universidad Tecnologica Nacional - Facultad FRBB",
            contenido: "A two-year technical program with theory and practice, including 60 hours of internship, totaling 1,980 hours. It grants a University Technician degree in Programming.",
            link: "",
            img: "/utn.webp"
        },
        {
            title: "#SéProgramar",
            subtitle: "Argentina Programa",
            contenido: "Programming course covering Ruby, JavaScript, algorithms, and object-oriented programming concepts.",
            link: "https://drive.google.com/file/d/1qvBY9fQlRcn7AXxFwSt2mOtdR7gFDhiK/view?usp=sharing ",
            img: "/argprog.webp"
        },
        {
            title: "Introduction to Programming",
            subtitle: "Fundaula Accenture",
            contenido: "Programming fundamentals course taught by Accenture covering algorithms, functions, and structured programming.",
            link: "https://drive.google.com/file/d/12ejhRwKdlpZrE8qO0IIK5Xcj93c8idwN/view?usp=sharing",
            img: "/acce.webp"
        },
        {
            title: "PC Repair and Networking",
            subtitle: "Escuela Argentina de Idiomas y Tecnología",
            contenido: "PC assembly and repair, system installation, and maintenance. Networking skills including VPN setup, cabling, and network distribution efficiency.",
            link: "",
            img: "/eait.webp"
        }
    ];

    const ItemStudy = ({ title, subtitle, contenido, link, img }) => {
        return (
            <article className="study-item">
                <span href={link ? link : ""} onClick={(e) => { if (!link) e.preventDefault(); }} target="_blank">
                    <img className="study-image" src={img}></img>
                </span>


                <div className="study-details">
                    <div className="study-text-group">
                        <h3 className="study-title">{title}</h3>
                        <span className="study-subtitle">{subtitle}</span>
                        <p className="study-description">{contenido}</p>
                    </div>


                    {link === "" ? <></> :
                        <a href={link} target="_blank" className="study-certificate-btn">Certificado
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    }

                </div>

            </article>
        );
    }

    return (
        <section className="studies-section">
            <div id="education-section" className="gap-nav-studies">
            </div>
            <RevealOnScroll>
                <Title
                    title="Estudios"
                    content=""
                    colorFrom="gold-dark"
                    colorTo="gold"
                />
            </RevealOnScroll>

            <article className="studies-container">
                <div className="studies-list">
                    {studiesList.map((study, index) => (
                        <RevealOnScroll key={index}>
                            <ItemStudy
                                title={study.title}
                                subtitle={study.subtitle}
                                contenido={study.contenido}
                                link={study.link}
                                img={study.img}
                            />
                        </RevealOnScroll>
                    ))}
                </div>
            </article>
        </section>
    );
}

export default Studies;
