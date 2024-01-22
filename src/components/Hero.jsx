const Hero = () => {

    const containerStyles = 
        "flex " +
        "flex-col " +
        "h-screen " +
        "justify-center " +
        "items-left " +
        "px-12 " +
        "bg-[url(./public/fondo.jpg)] " +
        "bg-cover " +
        "text-contrast "
        ;
    return ( 
        <div className={containerStyles}>
            <h1 className="inline text-7xl bold" >Florencia Cardinali</h1>
            <p className="inline text-2xl text-primary">Software Developer</p>
        </div>
     );
}
 
export default Hero;