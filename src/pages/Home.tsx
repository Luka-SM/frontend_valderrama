import { GiGuitarHead } from "react-icons/gi";
import { PiGuitarDuotone } from "react-icons/pi";
import { MdLibraryMusic } from "react-icons/md";
import guitarBackground from "../assets/images/guitarImage.jpg";


interface PageProps {
    id: string,
}

export default function Home({id}: PageProps) {

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
    }

    return(
        <main id={id} className="bg-[#0C0F11] min-h-screen w-full flex flex-col">
            
            <section style={{backgroundImage: `url(${guitarBackground})`}} className="bg-cover object-[center_50%] md:min-h-160 w-full flex justify-start items-center px-24">
                <article className="flex flex-col w-160 gap-12">
                    <div className="flex flex-col md:gap-8">
                        <div className="flex flex-col">
                            <h2 className="text-[#F5A623] text-lg font-semibold">TRADIÇÃO, TÉCNICA, INOVAÇÃO</h2>
                            <h1 className="text-white font-semibold text-8xl md:w-220">Transformando Madeira em Música</h1>
                        </div>
                        <p className="text-white">
                        Com uma trajetória marcada pela dedicação, precisão e sensibilidade artística, 
                        José Valderrama transforma madeiras selecionadas em instrumentos de excelência, unindo conhecimento técnico, 
                        tradição e paixão pela arte da lutheria.
                        </p>
                    </div>
                    
                    <div className="flex gap-6">
                        <button onClick={() => scrollToSection("luthier-contacts")} className="bg-[#F5A623] font-semibold text-black px-4 py-2 rounded-2xl hover:scale-110 hover:cursor-pointer transition-transform duration-300">Encomendar violão</button>
                        <button onClick={() => scrollToSection("about-luthier")} className="border border-white/40 text-white font-semibold px-4 py-2 rounded-2xl hover:scale-110 hover:cursor-pointer transition-transform duration-300">Sobre o Luthier</button>
                    </div>
                </article>
            </section>
            
            <section className="flex flex-1 justify-between items-center gap-8 px-16 py-8">
                <article className="flex flex-col gap-2 h-50">
                    <div className="text-[#F5A623] text-4xl"><PiGuitarDuotone /></div>
                    
                    <div className="flex flex-col text-white w-120 gap-2">
                    <h3 className="font-semibold text-xl">Lutheria Artesanal Tradicional Valderrama</h3>
                        <p className="text-md">José Valderrama constrói violões tradicionais artesanalmente, utilizando madeiras 
                        selecionadas e técnicas próprias. Seus instrumentos destacam-se pelo acabamento refinado, conforto ao tocar e 
                        riqueza sonora.
                        </p>
                    </div>
                    
                </article>

                <div className="border border-white/30 self-stretch"></div>

                <article className="flex flex-col gap-2 h-50">
                    <div className="text-[#F5A623] text-4xl"><GiGuitarHead /></div>
                    
                    <div className="flex flex-col text-white w-120 gap-2">
                        <h3 className="font-semibold text-xl">Arte No Formato De Afinação</h3>
                        <p className="text-md">As tarraxas de José Valderrama são desenvolvidas e fabricadas artesanalmente pelo próprio 
                        luthier. Possuem mecanismo preciso, macio e leve, proporcionando facilidade na afinação e praticidade na troca das 
                        cordas.
                        </p>
                    </div>
                </article>

                <div className="border border-white/30 self-stretch"></div>

                <article className="flex flex-col gap-2 h-50">
                    <div className="text-[#F5A623] text-4xl"><MdLibraryMusic /></div>
                    
                    <div className="flex flex-col text-white w-120 gap-2">
                        <h3 className="font-semibold text-xl">Acústica Instrumental De Linha</h3>
                        <p className="text-md">Valderrama pesquisa a harmonização das frequências da caixa acústica, considerando tampo, 
                        fundo, laterais e cavalete. Essa técnica busca equilibrar as ressonâncias e proporcionar potência, sustentação e 
                        riqueza de timbres.
                        </p>
                    </div>
                </article>

            </section>

        </main>
    )
}