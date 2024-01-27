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
    <div className="relative z-40">
        <div className={containerStyles}>
            <a className="flex justify-center h-[40px] gap-4 font-medium items-center">
                <img className="border-2 m-0 p-0 border-primary rounded-2xl w-[50px]" src="./perfil.jpg"></img>
                <span className="ml-3 text-2xl text-contrast">Flor Cardinali</span>
            </a>
            <nav className=" basis-1/3 flex gap-8 flex-wrap flex-row justify-center items-center mr-5 text-base ">
                <a className="text-primary text-[18px] font-extrabold hover:text-white cursor-pointer ">About</a>
                <a className={aStyles}>Second Link</a>
                <a className={aStyles}>Third Link</a>
                <a className={aStyles}>Fourth Link</a>
            </nav>
        </div>
    </div>
           
     );
}
 
export default NavBar;
