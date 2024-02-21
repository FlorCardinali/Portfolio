import Title from "./Title";

const Experience = () => {



    const data = [
        {      
            categoria: "PROGRAMACIÓN",
            fecha: "oct 2023 - feb 2024",
            titulo: "Tutora del Curso: Introducción a React Js",
            descripción: "Brindé apoyo y mentoría a los alumnos del curso de React Js con temas de programación y posteriormente con el uso de la librería."
        },
        {      
            categoria: "PROGRAMACIÓN",
            fecha: "jun 2023 - actualidad",
            titulo: "Pasante para el Concejo Escolar de Bahía Blanca",
            descripción: "Se creó un grupo de estudiantes para diseñar una nueva base de datos para el Concejo Escolar con el fín de tener mejor control sobre los mantenimientos a realizar en los edificios educativos"
        },
        {      
            categoria: "PROGRAMACIÓN - ATENCIÓN AL CLIENTE",
            fecha: "dic 2022 / mar 2023 -  dic 2023 / feb 2024 ",
            titulo: "Recepcionista",
            descripción: "Controlé el ingreso al Camping Bosque Encantado en Pehuen có. Fui encargada de los cobros y propuse e implementé un software de control para facilitar la contabilidad del negocio guardando los ingresos en una base de datos."
        },
        {      
            categoria: "CADETERÍA",
            fecha: "ago 2023 - actualidad",
            titulo: "Rider Pedido Ya",
            descripción: "Hago cadetería en Bahía Blanca en bicicleta, por hobby para hacer una actividad física y, de paso, para generar ingresos extra."
        },
        {      
            categoria: "COCINA",
            fecha: "dic 2019",
            titulo: "Ayudante de cocina, moza y bar-tender",
            descripción: "Trabajé en temporada en el parador Los Angelitos en Sierra de la Ventana, ocupando varios puestos con mi familia."
        },
        {      
            categoria: "LIMPIEZA",
            fecha: "ene 2016",
            titulo: "Auxiliar de maestranza",
            descripción: "Limpieza general de baños en el Bahía Blanca Plaza Shopping. Trabajo en grupos y limpieza de patios de comidas"
        },
    ]


    const ExpModule = (props) => {
        const d = props.d;
        return ( 
            <div className="py-8 flex justify-center flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col justify-center items-center text-center">
                    <span className=" md:w-[80%] pb-2 font-semibold title-font text-contrast">{d.categoria}</span>
                    <time className="md:w-[80%] mt-1 text-contrast/70 text-sm">{d.fecha}</time>
                </div>
                <div className="md:flex-grow"> 
                    <h2 className="text-2xl font-medium text-primary title-font mb-2">{d.titulo}</h2>
                    <p className="leading-relaxed min-w-screen md:max-w-[80%]">{d.descripción}</p>
                </div>
            </div>
         );
    }



    return (  
        <>
        <div id="experience-section" className="pt-24 bg-bgColor">
            <section className="text-contrast bg-bgColor overflow-hidden px-10">
                <Title
                    title="Experiencia"
                    content=""
                />
                <div className="relative container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-primary">
                    {data.map((item, index) => (
                        <ExpModule key={index} d={item} />
                    ))}
                    </div>
                </div>
            </section>
            <div className="bg-contrast h-[100px] ">
                <svg className="w-screen " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#211e1c" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,138.7C384,117,480,75,576,53.3C672,32,768,32,864,48C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
        </div>
        </>
    );
}
 
export default Experience;