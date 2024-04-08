
import Image from "next/image"

export default function DocumentName (){
    let defaultname = "welcome.md"

    return (
        <main>
<div className="flex justify-center items-center gap-5">
                            <Image className="w-13 h-16"
                            src={'./icon-document.svg'}
                            alt="document"
                            width={10}
                            height={10}
                            />
                            <div>
                                <p className=" text-black-100 text-xxsm">Document Name</p>
                                <input id="text" value={defaultname} className=" border-b-transparent bg-transparent bg-black-400 text-white text-sm  accent-black-400 focus:border-b focus:outline-none"  type="text"  />
                            </div>
                        </div>
        </main>

    )
}