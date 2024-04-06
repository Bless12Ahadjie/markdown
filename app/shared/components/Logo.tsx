import Image from "next/image";

const Logo = () =>{
    return(
        <Image
        src= {'./MARKDOWN.svg'} 
        alt="logo"
        width={130}
        height={34}
        />
    )
}

export default Logo;