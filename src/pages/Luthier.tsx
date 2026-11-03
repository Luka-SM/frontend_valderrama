import historia1 from "../assets/images/valderrama-history1.jpg"
import historia2 from "../assets/images/valderrama-history2.jpg"

interface PageProps {
    id: string,
}

export default function LuthierPage({id}: PageProps) {
    return(
        <main id={id} className="bg-[#0C0F11] min-h-screen w-full flex flex-col justify-center items-center">
            <section className="flex flex-col items-center gap-2">
                <h1 className="text-white text-5xl font-semibold font-serif">José Valderrama</h1>
                <p className="text-[#F5A623] text-lg">UM POUCO DE SUA HISTÓRIA</p>
            </section>
            
            <section className="flex flex-col gap-4">
                <article className="flex gap-8 items-center">
                    <div className="md:h-80 md:w-140 rounded-2xl flex justify-center items-center text-white font-semibold">
                        <img src={historia1} alt="" className="rounded-2xl w-full h-full object-cover"/>
                    </div>

                    <div className="text-white flex flex-col gap-4 bg-[#29231C] px-4 py-6 rounded-2xl">
                        <h2 className="text-white text-xl font-semibold font-serif">Da paixão pelo violão à dedicação à luteria</h2>
                        <p className="flex flex-wrap md:w-280 text-white/90">
                        José Valderrama descobriu sua paixão pelo violão ainda na infância, ao ouvir um conhecido da família tocar Abismo
                        de Rosas. Desde cedo, conciliou o interesse pela música com os estudos técnicos e a carreira profissional, 
                        trabalhando por 18 anos na General Motors. Sua aproximação com a luteria aconteceu por meio dos saraus de Ronoel 
                        Simões, onde conheceu o experiente luthier Manoel Andrade, que o introduziu ao universo das madeiras e da construção
                         de violões. Ao longo dos anos, desenvolveu conhecimentos e habilidades que uniram sua formação técnica à paixão 
                         pelo instrumento. Após a aposentadoria e a demissão durante a pandemia, decidiu dedicar-se integralmente à luteria,
                          transformando o que antes era um hobby em sua principal atividade.
                        </p>
                    </div>
                </article>

                <article className="flex gap-8 items-center">
                    <div className="text-white flex flex-col gap-4 bg-[#29231C] px-4 py-6 rounded-2xl ">
                        <h2 className="text-white text-xl font-semibold font-serif">A excelência artesanal e a inovação na construção de violões</h2>
                        <p className="flex flex-wrap md:w-280 text-white/90">
                        Há cerca de três décadas, Valderrama pesquisa e aperfeiçoa técnicas de construção artesanal de violões, 
                        destacando-se pela harmonização das ressonâncias da caixa harmônica, considerando o tampo, as laterais, o fundo e 
                        o cavalete. Seu trabalho busca reproduzir características sonoras de instrumentos de referência, sem se limitar à 
                        simples cópia, além de atender às necessidades e preferências de cada músico. Reconhecido por sua dedicação, pelo
                         cuidado na escolha dos materiais e pela busca constante de aprimoramento, construiu instrumentos para renomados
                          violonistas brasileiros, como Odair Assad e Everton Gloeden. Além disso, desenvolve componentes próprios, como 
                          tarraxas, e busca transmitir seus conhecimentos, consolidando seu lugar de destaque na luteria brasileira.
                        </p>
                    </div>

                    <div className="md:h-80 md:w-140 rounded-2xl flex justify-center items-center text-white font-semibold">
                        <img src={historia2} alt="" className="rounded-2xl w-full h-full object-cover object-[center_30%]"/>
                    </div>
                </article>
            </section>
            

        </main>
    )
}