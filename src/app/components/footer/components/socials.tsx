import Image from "next/image";
interface SocialsProps{
    title: string;
    path: string;
}

export const Socials = ({title, path}: SocialsProps) => {
    return(
        <a href="#" className="text-gray-800 hover:text-gray-900 ms-5">
            <Image src='logo\socials\github.svg' alt={title} width={25} height={25}></Image>
            <span className="sr-only">{title}</span>
        </a>
    )
}