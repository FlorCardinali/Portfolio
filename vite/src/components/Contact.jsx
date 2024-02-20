import Title from "./Title";
import { useState } from "react";


const Contact = () => {

    // const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name,
            phone,
            email,
            notes
        }; 
        let url = "https://wa.me/5492915275648?text=" + encodeURIComponent("*Nombre:* " + name 
        + "\n *Celular:* " + phone + "\n *Email:* " + email + "\n *Mensaje:* " + notes);
        // navigate(url);
    }
     

    return ( 
        <>
            <section className="w-screen bg-contrast flex justify-center items-center pt-32">
                    

                <div className="bg-bgColor rounded-3xl ">
                    <Title
                        title="Contacto"
                        content="" 
                    />
                    <form id="form-contact" className="flex flex-col items-end w-[80vw] lg:w-[40vw] justify-stretch px-12 pb-5 text-contrast space-y-10" action="" onSubmit={handleSubmit}>

                        <div className="w-full space-y-5 ">
                            <label className="flex flex-col gap-2 text-[#97b95e] font-bold " htmlFor="name-in">Nombre y Apellido:
                            <input form="form-contact" className=" border-2 border-gray-400 rounded-lg px-4 py-1 text-bgColor font-bold" id="name-in" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre..." /></label>


                            <label className="flex flex-col gap-2 text-[#97b95e] font-bold" htmlFor="cel-in">Telefono:
                            <input form="form-contact" className="border-2 border-gray-400 rounded-lg px-4 py-1 text-bgColor font-bold" id="cel-in" type="tel"  placeholder="Ingrese su numero de telefono..." name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/></label>

                            <label className="flex flex-col gap-2 text-[#97b95e] font-bold" htmlFor="mail-in">Mail:
                            <input form="form-contact" className="border-2 border-gray-400 rounded-lg px-4 py-1 text-bgColor font-bold"  id="mail-in" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Example_123@example.com" /></label>

                            <label className="flex flex-col gap-2 text-[#97b95e] font-bold" htmlFor="nombre-in">Notas:
                            <textarea form="form-contact" className="border-2 border-gray-400 rounded-lg p-4 text-bgColor font-bold" rows="5" id="nombre-in" type="" name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Ingrese cualquier duda, consulta o consejo ..." /></label>
                        </div>
                       
                        <button className="w-32 px-3 py-2 text-md  font-medium text-center text-contrast bg-green/80 rounded-lg hover:bg-green hover:text-white hover:font-extrabold"
                        form="form-contact" type="submit" >Enviar</button>
                    </form>
                </div>
                    
            </section>


            <div className="w-screen bg-bgColor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cecbca" fillOpacity="1" d="M0,288L60,261.3C120,235,240,181,360,186.7C480,192,600,256,720,272C840,288,960,256,1080,250.7C1200,245,1320,267,1380,277.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>
        </>
     );
}
 
export default Contact;