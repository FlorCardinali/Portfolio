const Proyects = () => {
    return (
        <>
             
                <section className="bg-contrast w-screem space-y-12 h-fit gap-1 flex flex-col items-center  ">
                <div id="proyects-section">
                </div>
                    <article className="flex flex-col text-center items-center ">
                        <h5 className="bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-primary to-green text-5xl sm:text-6xl py-5">
                            Mis Proyectos
                        </h5>
                        <p className="w-[80%] md:w-[70%] lg:w-[50%] text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis doloremque corrupti aut quaerat obcaecati!
                        </p>
                    </article>

                    <article className="flex-wrap  md:flex-row flex-col justify-center xl:justify-start items-center flex pb-14 lg:p-0 gap-3 ">

                        <div className="drop-shadow-[0px_5px_15px_rgba(0,0,0,0.35)] max-w-[22rem] bg-bgColor border-gray-200 rounded-lg  ">
                            <a href="#">
                                <img className="rounded-t-lg" src="/img1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-contrast">Proyecto 1</h5>
                                </a>
                                <p className="mb-3 font-normal text-contrast/80">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-contrast bg-green/80 rounded-lg hover:bg-green hover:text-white hover:font-extrabold ">
                                    Ver más
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#aaa333" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="drop-shadow-[0px_5px_15px_rgba(0,0,0,0.35)] max-w-[22rem] bg-bgColor border-gray-200 rounded-lg  ">
                            <a href="#">
                                <img className="rounded-t-lg" src="/img2.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-contrast">Proyecto 1</h5>
                                </a>
                                <p className="mb-3 font-normal text-contrast/80">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-contrast bg-green/80 rounded-lg hover:bg-green hover:text-white hover:font-extrabold ">
                                    Ver más
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#aaa333" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="drop-shadow-[0px_5px_15px_rgba(0,0,0,0.35)] max-w-[22rem] bg-bgColor border-gray-200 rounded-lg  ">
                            <a href="#">
                                <img className="rounded-t-lg" src="/img3.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-contrast">Proyecto 1</h5>
                                </a>
                                <p className="mb-3 font-normal text-contrast/80">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-contrast bg-green/80 rounded-lg hover:bg-green hover:text-white hover:font-extrabold ">
                                    Ver más
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#aaa333" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </article>         
                </section>
                <div className="bg-bgColor w-screen h-[250px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cecbca" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,64C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                </div>
            
        </>  
    );
}
//  
export default Proyects;
