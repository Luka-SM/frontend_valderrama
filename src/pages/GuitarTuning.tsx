import afinacao from "../assets/images/afinacao_valderrama.jpg"

interface PageProps {
    id: string,
}

export default function GuitarTuningPage({id}: PageProps) {
    return(
        <main id={id} className="bg-[#0C0F11] min-h-screen w-full flex flex-col justify-center items-center gap-4">
            <section className="flex flex-col items-center gap-4">
                <h1 className="text-white text-5xl font-semibold font-serif">Afinações Valderrama</h1>
                <p className="text-[#F5A623] text-lg">INSTRUMENTOS ARTESANAIS PROJETADOS TAMBÉM PARA DIFERENTES AFINAÇÕES</p>
            </section>

            <section className="flex gap-20 bg-[#29231C] py-8 px-16 rounded-2xl">
                <article className="relative md:h-140 md:w-120 rounded-2xl">
                    <div className="absolute z-1 bg-black/10 h-full w-full"></div>
                    <img src={afinacao} alt="" className="h-full w-full rounded-2xl"/>
                </article>

                <article className="flex md:w-180 flex-col justify-center gap-8 text-white/90">
                    <p className="flex flex-wrap md:w-160 text-xl">
                    Nos violões artesanais Valderrama, a afinação não é apenas um detalhe final,
                    mas parte do próprio projeto acústico do instrumento. As dimensões da escala, a espessura do tampo, o leque harmônico
                    e a escolha das madeiras são pensados para que o violão responda com naturalidade tanto na afinação padrão em Mi,
                    quanto em afinações mais graves, como Mi bemol e Ré.</p>
                    
                    <p className="flex flex-wrap md:w-160 text-xl">
                    Essas afinações permitem explorar timbres mais escuros, maior ressonância nos graves e diferentes níveis de tensão
                    nas cordas - recursos muito valorizados por intérpretes que buscam um som pessoal e expressivo, seja em repertório solo, 
                    em gravações de estúdio ou acompanhando voz.
                    </p>

                    <p className="flex flex-wrap md:w-180 text-xl">
                    Além disso, o trabalho de Valderrama busca preservar o equilíbrio sonoro mesmo diante das mudanças de afinação, 
                    evitando que a alteração da tensão das cordas comprometa a definição das notas e a estabilidade do instrumento. 
                    Dessa forma, cada violão oferece ao músico maior liberdade interpretativa, permitindo experimentar diferentes 
                    possibilidades musicais sem perder a identidade sonora característica de sua construção.
                    </p>
                </article>
            </section>
        </main>
    )
}