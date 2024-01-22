const NavBar = () => {
    const aStyles = "text-contrast hover:font-bold hover:text-white cursor-pointer ";
    const containerStyles = 
        "flex " + 
        "flex-wrap " + 
        "px-12 " + 
        "py-3 " + 
        "flex-col " + 
        "items-center " + 
        "md:justify-between " + 
        "md:items-center " + 
        "md:flex-row " +
        "fixed " +
        "w-screen " +
        "bg-bgColor/70 " 
        ;
    return ( 
    <div className="relative">
        <div className={containerStyles}>
            <a className="flex justify-center gap-4 font-medium items-center md:mb-0">
                <img className="border border-primary rounded-full w-[40px]" src="./public/perfil.jpg"></img>
                <span className="ml-3 text-2xl text-contrast">Flor Cardinali</span>
            </a>
            <nav className=" basis-1/3 flex gap-8 flex-wrap flex-row justify-center items-center mr-5 text-base ">
                <a className="text-contrast text-[18px] font-bold hover:text-white cursor-pointer ">About</a>
                <a className={aStyles}>Second Link</a>
                <a className={aStyles}>Third Link</a>
                <a className={aStyles}>Fourth Link</a>
            </nav>
        </div>
    </div>
           
     );
}
 
export default NavBar;
