import React, { useState } from 'react';

const Gallery = () => {

    const [active, setActive] = useState(0);

    const handlerActivate = (num) => {
      setActive(num);
    };

    return ( 
        <>
         <article className="flex flex-row justify-center  w-screen p-12">

            <div className={`${active===0 ? "w-[50%] " : "w-[10%]" } h-[80vh] min-w-[100px] bg-cover bg-[url(./img1.jpg)] transition-all duration-500 `} onClick={() => handlerActivate(0)}>
                
            </div>
            <div className={`${active===1 ? "w-[50%] " : "w-[10%]" } h-[80vh] min-w-[100px] bg-cover bg-[url(./img2.jpg)] transition-all duration-500`} onClick={() => handlerActivate(1)}>
            
            </div>
            <div className={`${active===2 ? "w-[50%] " : "w-[10%]" } h-[80vh] min-w-[100px] bg-cover bg-[url(./img3.jpg)] transition-all duration-500`} onClick={() => handlerActivate(2)}>
            </div>
            <div className={`${active===3 ? "w-[50%] " : "w-[10%]" } h-[80vh] min-w-[100px] bg-cover bg-[url(./img1.jpg)] transition-all duration-500`} onClick={() => handlerActivate(3)} >
            </div>
            <div className={`${active===4 ? "w-[50%] " : "w-[10%]" } h-[80vh] min-w-[100px] bg-cover bg-[url(./img1.jpg)] transition-all duration-500`} onClick={() => handlerActivate(4)} >
            </div>

        </article>
        </>
    );
}
 
export default Gallery;