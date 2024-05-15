'use client';

import Image from "next/image";
import store from "@/lib/core/stores/sidenavStore";

const Logo = () =>{
    const{isSidebarOpen} = store
    return(
        <Image
        className={ `${isSidebarOpen ? 'md:hidden' : 'md:block'} hidden sm:block`}
        src= {'./MARKDOWN.svg'} 
        alt="logo"
        width={130}
        height={34}
        />
    )
}

export default Logo;