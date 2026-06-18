import Title from "./Title";
import RevealOnScroll from "./RevealOnScroll";
import './Experience.css';

const Experience = () => {



    const data = [
        {
            "categoria": "ADMINISTRATION - PROGRAMMING",
            "fecha": "Sep 2024 - May 2025",
            "titulo": "ERP Administration and Data Entry",
            "descripción": "Managed the 'Hermes' ERP system for two companies, Catus S.A. and Multibahia. My main duties included updating prices, entering vouchers into the system, querying the database, and general maintenance."
        },
        {
            "categoria": "PROGRAMMING",
            "fecha": "Oct 2023 - Feb 2024",
            "titulo": "Course Tutor: Introduction to React Js",
            "descripción": "Provided support and mentorship to students in the React JS course, helping them with programming concepts and the use of the library."
        },
        {
            "categoria": "PROGRAMMING",
            "fecha": "Jun 2023 - Aug 2024",
            "titulo": "Intern at the School Council of Bahía Blanca",
            "descripción": "Part of a student group that designed a new database for the School Council to improve the tracking of building maintenance in local schools."
        },
        {
            "categoria": "PROGRAMMING - CUSTOMER SERVICE",
            "fecha": "Dec 2022 / Mar 2023 - Dec 2023 / Feb 2024",
            "titulo": "Receptionist and Administration",
            "descripción": "Managed entry to the Bosque Encantado Camping in Pehuen Có. I was in charge of payments and implemented a software solution to improve business accounting by saving income data in a database."
        }
    ]



    const ExpModule = (props) => {
        const d = props.d;
        return (
            <div className="exp-item">
                <div className="exp-item-meta">
                    <span className="exp-item-category">{d.categoria}</span>
                    <time className="exp-item-date">{d.fecha}</time>
                </div>
                <div className="exp-item-body">
                    <h3 className="exp-item-title">{d.titulo}</h3>
                    <p className="exp-item-desc">{d.descripción}</p>
                </div>
            </div>
        );
    }



    return (

        <section className="experience-section">
            <div id="experience-section" className="experience-nav">
            </div>
            <RevealOnScroll>
                <Title
                    title="Experience"
                    content=""
                    colorFrom="gold-dark"
                    colorTo="gold"
                />
            </RevealOnScroll>
            <div className="experience-container">
                <div className="experience-list">
                    {data.map((item, index) => (
                        <RevealOnScroll key={index}>
                            <ExpModule d={item} />
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default Experience;