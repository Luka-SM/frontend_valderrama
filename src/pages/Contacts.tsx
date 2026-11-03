import valderrama from "../assets/images/jose_valderrama.jpg"
import { GoogleMaps } from "../components/MapsIframe"

interface PageProps {
    id: string,
}

export default function ContactsPage({id}: PageProps) {
    return(
        <main id={id} className="bg-[#0C0F11] min-h-screen w-full flex flex-col justify-center items-center gap-8">
            <section className="flex flex-col items-center gap-2">
                <h1 className="text-white text-5xl font-semibold font-serif">Contatos Valderrama</h1>
                <p className="text-[#F5A623] text-lg">CANAIS DE INFORMAÇÃO OFICIAIS DO LUTHIER</p>
            </section>

            <section className="md:h-160 flex md:w-440 px-12 gap-24">
                <article className="h-full w-280 rounded-2xl bg-[#29231C] flex flex-col justify-between p-8">
                    
                    <div className="flex flex-col gap-16 text-white">
                        
                        <div className="flex gap-24">
                            <div className="w-60">
                                <h2 className="text-white text-xl font-semibold font-serif">Telefone/WhatsApp</h2>
                                <a 
                                href="https://wa.me/5511973344545?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E6A01B] text-[#D9900F] text-lg w-fit hover:cursor-pointer hover:underline transition-colors duration-200">(11) 97334-4545</a>
                            </div>

                            <div>
                                <h2 className="text-white text-xl font-semibold font-serif">Atendimento</h2>
                                <p className="text-[#D9900F] text-lg">Com horário agendado</p>
                            </div>
                        </div>

                        <div className="flex gap-24">
                            <div className="w-60">
                                <h2 className="text-white text-xl font-semibold font-serif">Instagram</h2>
                                <a href="https://www.instagram.com/valderrama_luthier?cplk=MXRoemNweXR2amF5OA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E6A01B] text-[#D9900F] text-lg w-fit hover:cursor-pointer hover:underline transition-colors duration-200">@valderrama_luthier</a>
                            </div>

                            <div>
                                <h2 className="text-white text-xl font-semibold font-serif">Email</h2>
                                <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@valderramaluthier.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E6A01B] text-[#D9900F] text-lg hover:cursor-pointer hover:underline transition-colors duration-200">contato@valderramaluthier.com.br</a>
                            </div>
                        </div>

                    </div>

                    <div className="bg-gray-800 h-80 w-full rounded-2xl flex justify-center items-center text-white font-semibold">
                        <GoogleMaps address="IMT, São Caetano do Sul, SP" />
                    </div>
                </article>

                <article className="relative h-full w-100 rounded-2xl justify-center items-center flex text-white font-semibold">
                    <div className="absolute z-1 bg-black/10 h-full w-full"></div>
                    <img src={valderrama} alt="" className="h-full w-full rounded-2xl object-cover object-[20%_center]"/>
                </article>
            </section>
        </main>
    )
}