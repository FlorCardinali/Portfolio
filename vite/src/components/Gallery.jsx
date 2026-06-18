import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {

    const [active, setActive] = useState(0);

    const handlerActivate = (num) => {
      setActive(num);
    };

    return ( 
        <>
         <article className="gallery-container">

            <div className={`gallery-item gallery-img-1 ${active === 0 ? "gallery-item-active" : "gallery-item-inactive"}`} onClick={() => handlerActivate(0)}>
                
            </div>
            <div className={`gallery-item gallery-img-2 ${active === 1 ? "gallery-item-active" : "gallery-item-inactive"}`} onClick={() => handlerActivate(1)}>
            
            </div>
            <div className={`gallery-item gallery-img-3 ${active === 2 ? "gallery-item-active" : "gallery-item-inactive"}`} onClick={() => handlerActivate(2)}>
            </div>
            <div className={`gallery-item gallery-img-1 ${active === 3 ? "gallery-item-active" : "gallery-item-inactive"}`} onClick={() => handlerActivate(3)} >
            </div>
            <div className={`gallery-item gallery-img-1 ${active === 4 ? "gallery-item-active" : "gallery-item-inactive"}`} onClick={() => handlerActivate(4)} >
            </div>

        </article>
        </>
    );
}
 
export default Gallery;