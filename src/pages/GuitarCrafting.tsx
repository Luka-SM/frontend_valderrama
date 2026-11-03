import { useNavigate } from "react-router-dom"
import violao from "../assets/images/imagem_tela_construcao_valderrama.jpg"

interface PageProps {
    id: string,
}

//Em "calculo de trastes" e "conheça a oficina" vai usar react-router-dom pra mudar de pagina

export default function CraftingPage({id}: PageProps) {

    const navigate = useNavigate()
    const goToFretCalcPage = () => navigate('/fret-calc')

    return(
        <main id={id} className="bg-[#0C0F11] min-h-screen w-full flex justify-center items-center">
            <section className="flex flex-col gap-12 ">
                <article className="flex flex-col items-center gap-4">
                    <h1 className="font-semibold text-5xl text-white font-serif">Processo de Construção Valderrama</h1>
                    <p className="text-[#F5A623] text-lg">PRECISÃO ACÚSTICA APLICADA À CONSTRUÇÃO ARTESANAL DO VIOLÃO</p>
                </article>

                <article className="flex h-120 gap-12 justify-center">
                    <div className="bg-gray-800 h-full w-100 rounded-2xl flex justify-center items-center text-white font-semibold">
                        <img src={violao} alt="" className="rounded-2xl h-full w-full"/>
                    </div>

                    <div className="flex flex-col gap-6 h-full justify-center">
                        <button className="border border-white/40 text-white font-semibold px-4 py-2 rounded-2xl hover:scale-110 hover:cursor-pointer transition-transform duration-300">
                            <p>CONHEÇA A OFICINA</p>
                        </button>
                        <button onClick={goToFretCalcPage} className="bg-[#F5A623] font-semibold text-black px-4 py-2 rounded-2xl hover:scale-110 hover:cursor-pointer transition-transform duration-300">
                            <p>CÁLCULO DE TRASTES</p>
                        </button>
                    </div>

                </article>

            </section>
        </main>
    )
}