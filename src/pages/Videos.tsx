import VideoCard from "../components/VideoCard"

interface PageProps {
    id: string,
}

export default function VideosPage({id}: PageProps) {
    
    const videosList = [
        {id: 0, title: "Video 1 - Apresentação X em Y", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis magni dolores odit minus, molestiae voluptatibus ratione placeat?", video: ""},
        {id: 1, title: "Video 2 - Apresentação X em Y", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis magni dolores odit minus, molestiae voluptatibus ratione placeat?", video: ""},
        {id: 2, title: "Video 3 - Apresentação X em Y", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis magni dolores odit minus, molestiae voluptatibus ratione placeat?", video: ""},
        {id: 3, title: "Video 4 - Apresentação X em Y", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis magni dolores odit minus, molestiae voluptatibus ratione placeat?", video: ""},
        {id: 4, title: "Video 5 - Apresentação X em Y", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis magni dolores odit minus, molestiae voluptatibus ratione placeat?", video: ""},
        {id: 5, title: "Video 6 - Apresentação X em Y", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis magni dolores odit minus, molestiae voluptatibus ratione placeat?", video: ""},
        {id: 6, title: "Video 7 - Apresentação X em Y", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis magni dolores odit minus, molestiae voluptatibus ratione placeat?", video: ""},
    ]

    return(
        <main id={id} className="bg-[#0C0F11] min-h-screen w-full flex flex-col justify-center items-center text-white gap-24">
            <section className="flex flex-col w-full items-center gap-2">
                <h1 className="text-white text-5xl font-semibold font-serif">Vídeos</h1>
                <p className="text-[#F5A623] text-lg">PROGRAMAS, INTERPRETAÇÕES E APRESENTAÇÕES COM INSTRUMENTOS VALDERRAMA</p>
            </section>

            <section className="flex w-full gap-8 pb-12 overflow-x-auto">
                {videosList.map((video) => (
                    <VideoCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    description={video.description}
                    video={video.video}
                    />
                ))}
            </section>
        </main>
    )
}