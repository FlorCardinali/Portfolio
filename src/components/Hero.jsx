const Hero = () => {
const imgStyles = "w-8 hover:scale-110";
    return ( 
        <>
            <div className="flex relative flex-row h-screen items-center text-contrast">
                <div className="m-0 basis-2/3  flex items-center justify-center h-screen">
                    <img className="m-0 z-3 h-screen clip-paralelogram" src="./img1.jpg" alt="" />
                </div>
                <div className="absolute rounded-lg bg-primary/40 p-11 left-[50vw] h-content basis-1/3 md:px-[50px] gap-3 flex flex-col justify-center ">
                    <div className="flex flex-col text-center ">
                        <h1 className="text-7xl font-bold">Bienvenidos</h1>
                        <p className="py-1 text-2xl font-extrabold text-bgColor"> Me alegra que estes aqui!</p>                        
                    </div>
                    <div className=" p-2 flex flex-row gap-5 justify-center items-center">
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
                
            </div>
            
        </>
     );
}
 
export default Hero;