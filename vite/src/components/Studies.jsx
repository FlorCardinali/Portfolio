import Title from "./Title";



const Studies = () => {

    const ItemStudy = ({title,subtitle,contenido,link,img}) => {
        return (
        <article className="flex justify-center items-center flex-col lg:flex-row">
                <a href="">
                    <img className="lg:rounded-xl lg:max-w-[30vw] w-screen m-8 hover:scale-110 transition-all duration-300" src={img}></img>   
                </a>
                
                
                 <div className="space-y-10 w-full p-10 flex flex-col items-start">
                    <div className="text-left space-y-5">
                        <h2 className="text-primary text-3xl font-bold pb-3 w-[80%] ">{title}</h2>
                        <span className="text-contrast/70">{subtitle}</span>
                        <p className="text-left lg:max-w-[50vw]">{contenido}</p>
                    </div>
                    

                    {link==="" ? <></> : 
                    <button href={link}  className="flex-row flex items-center rounded-md px-4  text-contrast bg-secondary hover:bg-primary">Certificado  
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    }
                    
                </div> 

        </article>
        );
    }



  
    return ( 
        <>
        <div id="education-section">
        </div>
            <section className="w-screen pt-24 bg-bgColor text-contrast ">
                <Title
                    title="Estudios"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis doloremque corrupti aut quaerat obcaecati!"
                />

               <article className="text-contrast  px-5 py-12 mx-auto flex flex-wrap justify-center w-screen">
                 
                    {/* items */}
                    <div className="flex flex-col  flex-wrap  lg:text-left w-fll h-full">
                        <ItemStudy 
                            title="Tecnicatura Universitaria en Programacion" 
                            subtitle= "Universidad Tecnologica Naciona - Facultad FRBB"
                            contenido="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates, exercitationem dolore quod vitae optio ad dolores hic, suscipit reprehenderit velit laudantium. Necessitatibus temporibus expedita laudantium accusamus velit ad nulla." 
                            link="us"
                            img="/img1.jpg"/>
                        <ItemStudy 
                            title="Full Stack Developer"
                            subtitle= "Argentina Programa - #SéProgramar"
                            contenido="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates, exercitationem dolore quod vitae optio ad dolores hic, suscipit reprehenderit velit laudantium. Necessitatibus temporibus expedita laudantium accusamus velit ad nulla." 
                            link="u"
                            img="/img1.jpg"/>
                        <ItemStudy 
                            title="Introduccion a la Programacion"
                            subtitle = "Escuela Accenture" 
                            contenido="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates, exercitationem dolore quod vitae optio ad dolores hic, suscipit reprehenderit velit laudantium. Necessitatibus temporibus expedita laudantium accusamus velit ad nulla." 
                            link="u"
                            img="/img1.jpg"/>
                        <ItemStudy 
                            title="Reparacion de PC y redes" 
                            subtitle="Escuela Argentina de Idiomas y Tecnologia"
                            contenido="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates, exercitationem dolore quod vitae optio ad dolores hic, suscipit reprehenderit velit laudantium. Necessitatibus temporibus expedita laudantium accusamus velit ad nulla." 
                            link="u"
                            img="/img1.jpg"/>
                        
                    </div>
               </article>
            </section>

            <div className="bg-contrast w-screen h-[300px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#211e1c" fillOpacity="1" d="M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,218.7C672,245,768,267,864,234.7C960,203,1056,117,1152,85.3C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
        </> 
    );
}
 
export default Studies;
