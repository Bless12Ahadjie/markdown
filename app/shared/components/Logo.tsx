'use client';

import Image from "next/image";

const Logo = () =>{
    return(
        <Image
        className=" hidden sm:block"
        src= {'./MARKDOWN.svg'} 
        alt="logo"
        width={130}
        height={34}
        />
    )
}

export default Logo;