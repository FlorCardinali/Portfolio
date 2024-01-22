const NavBar = () => {
    const aStyles = "text-contrast mr-5 hover:text-primary cursor-pointer"
    const containerStyles = 'flex flex-wrap px-12 py-5 flex-col items-center md:justify-between md:items-center md:flex-row';
    return ( 
            <div class={containerStyles}>
                <a class="flex title-font font-medium items-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl text-contrast">Flor Cardinali</span>
                </a>
                <nav class="flex flex-wrap flex-row justify-center text-xl md:">
                    <a class={aStyles}>First Link</a>
                    <a class={aStyles}>Second Link</a>
                    <a class={aStyles}>Third Link</a>
                    <a class={aStyles}>Fourth Link</a>
                </nav>
            </div>
     );
}
 
export default NavBar;
