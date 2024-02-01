import { useState } from "react";

const NavBar = () => {
    const aStyles = "text-contrast hover:font-bold hover:text-white cursor-pointer w-28";
    const [open, setOpen] = useState(false);
    function handleClick () {
        setOpen(!open)
    }
    return ( 
    <div className="relative z-40">
        <div className= "justify-between flex md:px-12 px-6 py-3 gap-4 md:gap-0  md:flex-row fixed w-screen bg-bgColor/50 h-[55px]">
            <span className={`${open ? "-translate-x-[700px]" : "translate-x-0"} h-[30px] justify-center flex gap-4 font-medium items-center transition-transform duration-600`}>
                <img className="border-2 m-0 p-0 border-primary rounded-2xl w-[40px]" src="./perfil.jpg"></img>
                <span className="ml-3 text-2xl text-contrast">Flor Cardinali</span>
            </span>
            <nav className=" basis-1/3 grow flex-row justify-end items-center mr-5 text-base lg:flex hidden text-center">
                <a href="#" className="text-white text-[18px] font-extrabold hover:text-xl cursor-pointer w-20">Inicio</a>
                <a href="#about-section" className={aStyles}>Sobre mi</a>
                <a href="#experience-section" className={aStyles}>Experiencia</a>
                <a href="#proyects-section" className={aStyles}>Proyectos</a>
                <a href="#education-section" className={aStyles}>Estudios</a>

            </nav>

            <button className="space-y-1 p-2 lg:hidden z-10" onClick={handleClick}>
                <div className='w-6 h-1 bg-white'></div>
                <div className='w-6 h-1 bg-white'></div>
                <div className='w-6 h-1 bg-white'></div>
            </button>

            <nav className={`${open ? "right-0" : "-right-[250%]"} top-[55px] bg-bgColor/50 w-screen flex flex-col space-y-5 text-center absolute items-center p-5 text-xl transition-all duration-500 `}>
                <a href="#" className=" text-[18px] font-extrabold hover:text-xl text-white cursor-pointer ">Inicio</a>
                <a href="#about-section" className={aStyles}>Sobre mi</a>
                <a href="#experience-section" className={aStyles}>Experiencia</a>
                <a href="#proyects-section" className={aStyles}>Proyectos</a>
                <a href="#education-section" className={aStyles}>Estudios</a>

            </nav>

        </div>
    </div> 
           
     );
}
 
export default NavBar;
