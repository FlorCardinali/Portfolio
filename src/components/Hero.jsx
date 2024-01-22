const Hero = () => {
const imgStyles = "w-8 hover:scale-110";
    return ( 
        <>
            <div className="flex flex-col h-screen justify-between items-left bg-[url(./public/fondo.jpeg)] bg-center bg-cover text-contrast">
                <div className="md:px-[150px] p-auto md:mx-12 gap-3 m-auto basis-4/5 flex flex-col w-auto justify-center items-left">
                    <div className="mt-[150px]">
                        <h1 className="text-7xl font-bold">Bienvenidos</h1>
                        <p className="p-1 text-2xl text-primary"> Me alegra que estes aqui!</p>                        
                    </div>
                    <div className=" p-2 flex flex-row gap-5 justify-start items-center">
                        <a href="">
                            <img className={imgStyles} src="facebook.png" alt="Imagen"></img>
                        </a>
                        <a href="">
                            <img className={imgStyles} src="github.png" alt="Imagen"></img>
                        </a>
                        <a href="">
                            <img className={imgStyles} src="linkedin.png" alt="Imagen"></img>
                        </a>
                    </div>
                </div>
                <div className="basis-1/5 w-screen h-[400px] bg-gradient-to-t from-bgColor to-transparent">
                </div>  
            </div>
            
        </>
     );
}
 
export default Hero;