const Title = ({title,content}) => {
    return ( 
        <>
            <div className=" flex flex-col px-5 text-center items-center ">
                <h5 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green text-5xl font-extrabold sm:text-6xl py-5">
                    {title}
                </h5>
                <p className="w-[100%] md:w-[70%] lg:w-[40%] text-center">
                    {content}
                </p>
            </div>
        </>
     );
}
 
export default Title;