import NavbarButton from "./NavbarButton"

export default function Navbar() {

    const buttonsList = [
        {id: "homepage", text:"Início"},
        {id: "about-luthier", text:"O Luthier"}, 
        {id: "guitar-gallery", text:"Violões"}, 
        {id: "guitar-crafting", text:"Construção"}, 
        {id: "guitar-tuners", text:"Tarrachas"}, 
        {id: "guitar-tuning", text:"Afinações"}, 
        {id: "courses", text:"Curso"}, 
        {id: "videos", text:"Vídeos"}, 
        {id: "luthier-contacts", text:"Contato"}, 
    ]

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
    
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return(
        <main className="fixed flex justify-between items-center md:min-h-20 w-full px-16 text-white">

            <section className="flex gap-24">
                <div onClick={() => scrollToSection("homepage")} className="hover:cursor-pointer">LOGO DO VALDERRAMA</div>
                
                <article className="flex gap-8">
                    {buttonsList.map((button) => (
                        <NavbarButton
                        key={button.id}
                        id={button.id}
                        text={button.text}
                        navigation={scrollToSection}
                        />
                    ))}
                    
                </article>
            </section>

            <button className="flex justify-center items-center border border-white px-4 py-1 rounded-2xl hover:cursor-pointer hover:scale-110 transition-transform duration-300">
                <p className="font-semibold">Login</p>
            </button>

        </main>
    )
}