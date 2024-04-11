
import { ToastContainer } from "react-toastify"
import MarkdownBody from "./MarkdownBody"
import Header from "../layouts/Header"
import Sidenav from "../layouts/Sidenav"
import MarkdownView from "../layouts/markdownVIew"

export default function Applayout (){
return(
    <main >
        <div className="flex dark:bg-black-600 ">
            <Sidenav></Sidenav>

            <div className=" w-full h-screen">

            <Header></Header>
            <div>
            <MarkdownBody ></MarkdownBody>
            </div>
        
            </div>
       
           
        </div>

    </main>
)
}