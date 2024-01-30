const Hero = () => {
const imgStyles = "w-8 hover:scale-150 hover:drop-shadow-[0px_0px_5px_rgba(190,140,88,1)] ";
    return ( 
        <>
            <div className="flex relative flex-col justify-end items-center h-screen text-contrast bg-[url('./escalada.jpeg')] bg-left lg:bg-top bg-no-repeat bg-cover bg-fixed mb-[-15px]">
                <div className="absolute translate-y-20 text-center bottom-[40vh] flex flex-col">
                    <div className="animate-fade animate-once animate-duration-[800ms] animate-ease-in animate-normal animate-fill-both">
                        <h1 className="md:text-8xl text-5xl p-2  font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-green ">Bienvenidos</h1>
                        <p className="md:text-2xl text-xl font-extrabold text-contrast">Te invito a conocerme!</p>                        
                    </div>
                    <div className="p-5 flex flex-row gap-5 justify-center items-center">
                        <a href="">
                            <img className={imgStyles} src="github.png" alt="Imagen"></img>
                        </a>
                        <a href="">
                            <img className={imgStyles} src="linkedin.png" alt="Imagen"></img>
                        </a>
                        <a href="">
                            <img className={imgStyles} src="facebook.png" alt="Imagen"></img>
                        </a>
                    </div>
                </div>
                <div className="w-screen translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cecbca" fillOpacity="1" d="M0,128L60,133.3C120,139,240,149,360,176C480,203,600,245,720,256C840,267,960,245,1080,234.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
            </div>
            
        </>
     );
}
//  
export default Hero;