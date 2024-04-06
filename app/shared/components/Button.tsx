import Image from "next/image"
import { btns } from "@/app/core/type/button "



const Button = ({name,style,className,src,alt}:btns) => {
    return(
        <main>
            <button  className="flex justify-center items-center gap-3 p-1 h-45 w-152 bg-orange-600 rounded-lg cursor-pointer hover:bg-orange-400">
              <svg className="w-16 h-16"
                    path={src}
                    xmlns={alt}
                />

           

                <p /*className="text-white text-sm"*/ style={style} className={className}>{name}</p>
                

            </button>

        </main>
    )
} 





export default Button;
