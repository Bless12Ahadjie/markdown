import Image from "next/image"

export default function DeleteBtn (){
    return(
<main>
<button>
        <Image className="w-18 h-20"
            src={'./icon-delete.svg'}
            alt="delete logo"
            width={1}
            height={1}
        />
    </button>
</main>
    )
}