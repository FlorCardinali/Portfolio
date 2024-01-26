const AboutMe = () => {
    const spam_style = " font-extrabold text-green ";
    return ( 
        <>
        <section className="bg-contrast gap-12 flex lg:flex-row flex-col-reverse items-center lg:items-center justify-center h-auto p-12">
            
            <article className="gap-4 flex flex-col text-center lg:text-right text-bgColor w-[100%] lg:w-[40%]">
                <div>
                    <h2 className="font-extrabold text-4xl py-2">
                    Florencia Paula Cardinali:
                    </h2>
                    <p className="text-green font-bold text-xl">Software Developer Jr.</p>
                </div>
                
                <p id="about-text">
                Me presento, yo soy <span className={spam_style}>Florencia Cardinali</span>, Estoy por terminar una Tecnicatura universitaria en programación en la Universidad Tecnológica Nacional. 
                Soy <span className={spam_style}>perfeccionista</span> y <span className={spam_style}>adaptable</span>, me agrada trabajar en equipos donde se valore y se fomente el crecimiento personal y <span className={spam_style}>profesional</span>. 
                Me gusta centrarme en la calidad de los proyectos, en la <span className={spam_style}>legibilidad del codigo</span> y su limpieza, basciamente, si puedo dejar el codigo mas limpio que como lo encontre, mejor.
                Los ambitos en donde mas me he desarrollado son; el  <span className={spam_style}>desarrollo de videojuegos</span> en Unity y Godot, y el <span className={spam_style}>desarrollo web </span> tanto frontend como backend.
                Como se observa a simple vista, soy albina, tengo una discapacidad visual parcial del 78%, sin embargo, esto no me limita en mi carrera y pienso seguir creciendo y  <span className={spam_style}>estudiando siempre</span>. 
                </p>
            </article>
            <div className="rounded-3xl  min-w-[300px] min-h-[400px] max-h-[500px] bg-cover bg-center bg-no-repeat bg-[url('./foto-about.jpeg')] ">               
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cecbca" fill-opacity="1" d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </>
        );
}
 
export default AboutMe;