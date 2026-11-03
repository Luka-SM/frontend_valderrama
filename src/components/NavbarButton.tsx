interface NavButtonProps {
    id: string,
    text: string,
    navigation: (id: string) => void,
}

export default function NavbarButton({id, text, navigation}: NavButtonProps) {
    return(
        <main onClick={() => navigation(id)} className="hover:cursor-pointer text-white hover:text-yellow-500 transition-colors duration-200">
            {text}
        </main>
    )
}