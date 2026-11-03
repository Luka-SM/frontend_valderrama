import tarrachas1 from "../assets/images/tarrachas_valderrama.jpg"
import tarrachas2 from "../assets/images/tarrachas_valderrama2.jpg"
import tarrachas3 from "../assets/images/tarrachas_valderrama3.jpg"

interface PageProps {
    id: string,
}

export default function GuitarTunersPage({id}: PageProps) {
    return(
        <main id={id} className="bg-[#0C0F11] min-h-screen w-full flex flex-col justify-center items-center gap-8">
            <section className="w-full flex flex-col items-center gap-4">
                <h1 className="text-white text-5xl font-semibold font-serif">Tarrachas Valderrama</h1>
                <p className="text-[#F5A623] text-lg">FERRAGENS ARTESANAIS DESENVOLVIDAS PARA MÁXIMA PRECISÃO, ESTABILIDADE E ESTÉTICA CLÁSSICA</p>
            </section>

            <section className="flex h-160 w-full justify-center gap-24 md:px-16">
                <article className="flex flex-col justify-between">
                    <article className="bg-[#29231C] h-fit border border-white/40 flex flex-col justify-start rounded-2xl gap-6 p-8">                     
                        <div className="md:w-200 flex justify-start items-center gap-4">
                            <div className="min-h-2 min-w-2 rounded-full bg-white"></div>
                            <p className="text-white flex-wrap text-xl">Disponível para violões de 6, 7 e 8 cordas - feito sob encomenda</p>
                        </div>

                        <div className="md:w-200 flex justify-start items-center gap-4">
                            <div className="min-h-2 min-w-2 rounded-full bg-white"></div>
                            <p className="text-white flex-wrap text-xl">Placa base modelo Hauser - peça única com mancais integrados</p>
                        </div>

                        <div className="md:w-200 flex justify-start items-center gap-4">
                            <div className="min-h-2 min-w-2 rounded-full bg-white"></div>
                            <p className="text-white flex-wrap text-xl">Peças confeccionadas em ébano selecionado</p>
                        </div>

                        <div className="md:w-200 flex justify-start items-center gap-4">
                            <div className="min-h-2 min-w-2 rounded-full bg-white"></div>
                            <p className="text-white flex-wrap text-xl">Engrenagem com 15 dentes para ajuste fino e preciso</p>
                        </div>

                        <div className="md:w-200 flex justify-start items-center gap-4">
                            <div className="min-h-2 min-w-2 rounded-full bg-white"></div>
                            <p className="text-white flex-wrap text-xl">Pinos pretos com diâmetro de 10mm</p>
                        </div>

                        <div className="md:w-200 flex justify-start items-center gap-4">
                            <div className="min-h-2 min-w-2 rounded-full bg-white"></div>
                            <p className="text-white flex-wrap text-xl">Compactas e leves, preservando o equilíbrio e a ergonomia do instrumento</p>
                        </div>
                    </article>

                    <div className="flex justify-between">
                        <img src={tarrachas2} alt="" className="object-cover w-100 h-60 rounded-2xl"/>
                        <img src={tarrachas3} alt="" className="object-cover w-100 h-60 rounded-2xl"/>
                    </div>
                </article>

                <article className="relative md:h-160 md:w-120 rounded-2xl flex justify-center items-center text-white font-semibold">
                    <div className="absolute z-1 bg-black/10 h-full w-full"></div>
                    <img src={tarrachas1} alt="" className="h-full w-full rounded-2xl"/>
                </article>
            </section>
        </main>
    )
}