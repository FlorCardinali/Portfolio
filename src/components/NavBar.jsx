const NavBar = (image) => {
    const aStyles = "text-contrast " + "mr-5 " + "hover:text-primary " + "cursor-pointer ";
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
        "bg-bgColor/80 " 
        ;
    return ( 
    <div className="relative">
        <div class={containerStyles}>
            <a class="flex title-font font-medium items-center mb-4 md:mb-0">
                <img src=""></img>
                <span class="ml-3 text-base text-contrast">Flor Cardinali</span>
            </a>
            <nav class="flex flex-wrap flex-row justify-center text-base md:">
                <a class={aStyles}>First Link</a>
                <a class={aStyles}>Second Link</a>
                <a class={aStyles}>Third Link</a>
                <a class={aStyles}>Fourth Link</a>
            </nav>
        </div>
    </div>
           
     );
}
 
export default NavBar;
