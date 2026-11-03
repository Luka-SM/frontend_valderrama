interface VideoProps {
    id: number,
    title: string,
    description: string,
    video: string,
}

export default function VideoCard({id, title, description, video}: VideoProps) {
    return(
        <main id={String(id)} className="bg-gray-900 md:min-h-110 md:min-w-140 rounded-2xl flex flex-col justify-center items-center gap-8">
            <section className="flex flex-col gap-2 justify-center items-center flex-wrap">
                <h2 className="text-2xl text-white font-semibold font-serif px-4 text-center">{title}</h2>
                <p className="text-lg text-white/80 w-[80%] px-4 text-center">{description}</p>
            </section>

            <section className="md:min-h-60 md:w-[90%] bg-gray-800 rounded-2xl">
                {video}
            </section>
        </main>
    )
}